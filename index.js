const request = require("request");
const cheerio = require("cheerio");

// const url = "https://www.eagle.org/safenet/record/record_vesseldetailsprinparticular?Classno=16268171&Accesstype=PUBLIC&ReferrerApplication=PUBLIC"
const url = "https://www.eagle.org/safenet/record/record_vesselsearch"

function getVesselTypes() {
    const $ = cheerio.load(
        request(url, function (error, response, html) {
            if (error) {
                console.log(error.message);
                return;
            }
            const $ = cheerio.load(html);
            // console.log($(".row2bold").text());

            const vesselTypes = [];
            $("[name='VESSEL_TYPE'] > option").each(function(i, elem){
                if ($(this).text() == "") {
                    return;
                }
                vesselTypes[i] = $(this).text();
            });
            for (index in vesselTypes) {
                console.log(vesselTypes[index]);
            }
        })
    );
};

getVesselTypes();

// console.log($("tr.row1 td:nth-child(1)").text());
