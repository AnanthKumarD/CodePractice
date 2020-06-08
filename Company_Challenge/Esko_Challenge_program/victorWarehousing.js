const fs = require('fs')
fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    var finalResult = [];
    var TotalVal = inputLines.slice(1, inputLines.length);
    for (var i = 1; i < inputLines.length; i++) {
        var indVal = inputLines[i].split(" = ");
        var p1 = indVal[0];
        var totalPackageToCreated = indVal[1].split(" ")[0];
        var p2 = indVal[1].split(" ")[1];
        if (!finalResult.length) {
            finalResult.push([p1, totalPackageToCreated, p2])
        } else {
            var k = 0;
            var l = 0;
            while (finalResult.length != TotalVal.length) {
                if (l < TotalVal.length && TotalVal[l].startsWith(finalResult[k][2])) {
                    finalResult.push([p1, totalPackageToCreated, p2])
                }
                l++;
            }
            console.log(finalResult, 'P1', p1, '.....', p2)
        }
    }
    //process.stdout.write(unitData + "\n");
})

const cities = await this.userProfileModel
    .findAll({
        attributes: ["location"],
        include: [{
            attributes: ["name"],
            model: this.cityModel,

            include: [{
                model: this.model,
                attributes: [
                    ["user_id", "id"],
                    [
                        Sequelize.fn(
                            "concat",
                            Sequelize.col("first_name"),
                            " ",
                            Sequelize.col("last_name")
                        ),
                        "name"
                    ]
                ],
            }],
        }],
        // where: whereCondition,
        where: {
            status: STATUS.ACTIVE,
        },
    }).map(values => {
        console.log(values, '>>>>>>>');
        values.get({
            plain: true
        })
    });