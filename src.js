// Məhsul Daxil Edin bölümündən məhsul əlavə ediləcək.

var neqliyyat_xercleri = document.getElementById('neqliyyat_xercleri')
var iscilik = document.getElementById('iscilik')
var cem = document.getElementById('cem')

var add_malin_adi = document.getElementById('add_malin_adi')
var add_olcu_vahidi = document.getElementById('add_olcu_vahidi')
var add_miqdar = document.getElementById('add_miqdar')
var add_qiymet = document.getElementById('add_qiymet')

var malin_adi = document.getElementById('malin_adi')
var olcu_vahidi = document.getElementById('olcu_vahidi')
var qiymet = document.getElementById('qiymet')
var mebleg = document.getElementById('mebleg')

var valeh = document.getElementById('valeh')
var tbody = document.getElementById('tbody')

var input_malin_adi = document.querySelector('.input_malin_adi')
var input_qiymet = document.querySelector('.input_qiymet')

function pressEnter(e) {

    if (e.key == 'Enter' && input_malin_adi.value != '' && isNaN(parseFloat(input_qiymet.value)) == false && isNaN(parseFloat(add_miqdar.value)) == false) {

        productNo = document.querySelectorAll('#tbody tr').length + 1

        tbody.innerHTML += `
          <tr>
          <th scope="row" class="rowNumber">${productNo}</th>
          <td scope="row" id="malin_adi">${add_malin_adi.value}</td>
          <td scope="row" id="olcu_vahidi">${add_olcu_vahidi.value}</td>
          <td scope="row" id="miqdar">${add_miqdar.value}</td>
          <td scope="row" id="qiymet">${parseFloat(add_qiymet.value)}</td>
          <td scope="row" id="mebleg">${add_miqdar.value * parseFloat(input_qiymet.value)}</td>
          <td style="display: flex;"><button id='edit_product'><i class="fa-solid fa-pen-to-square"></i></button> <button class="rm printTotal" id='remove_product'><i class="fa-regular fa-trash-can"></i></button></td> 
          </tr>
          `

        var mebleg_len = document.querySelectorAll('#tbody #mebleg')
        var neqliyat_total = document.querySelectorAll('tbody .mebleg input')[0].value
        var iscilik_total = document.querySelectorAll('tbody .mebleg input')[1].value


        var total = 0

        for (let i = 0; i < mebleg_len.length; i++) {
            total = total + Number(mebleg_len[i].innerText)
        }

        cem.innerText = total + Number(neqliyat_total) + Number(iscilik_total)

        let edit_product = document.getElementById('edit_product')
        let remove_product = document.querySelectorAll('.rm')

        remove_product.forEach(a => {
            a.addEventListener('click', function () {
                this.closest('tr').remove()
                for (let index = 0; index < mebleg_len.length; index++) {
                    document.querySelectorAll("#tbody > tr > th")[index].innerText = index + 1
                }
            })
        })

        //   remove_product.addEventListener('click', function () {
        //       this.closest('tr').remove()
        //   })
    }
}

function printTotal() {

    var mebleg_len = document.querySelectorAll('#tbody #mebleg')
    var neqliyat_total = document.querySelectorAll('tbody .mebleg input')[0].value
    var iscilik_total = document.querySelectorAll('tbody .mebleg input')[1].value

    var total = 0

    var neq_isc = Number(neqliyat_total) + Number(iscilik_total)

    for (let i = 0; i < mebleg_len.length; i++) {
        total = total + Number(mebleg_len[i].innerText)
    }
    cem.innerText = neq_isc + total
}

document.querySelectorAll('.test').forEach(item => {
    item.addEventListener('keypress', pressEnter)
})

"keyup click".split(" ").forEach(function (e) {
    window.addEventListener(e, printTotal);
});

// ------------------------------------------------------------------------------------------------------------------------------

let names = [
    '32 mm boru fiber (Plasterm)',
    '32 mm boru fiber',
    '50 mm boru sadə',
    '40 mm boru sadə',
    '32 mm boru sadə',
    '50 çuxol',
    '40 çuxol',
    '32 çuxol',
    '4x8 şveller',
    '32 mm dəmir vintil',
    '15 mm dəmir vintil',
    'Avtomatik hava puruforu',
    'Qazanxana xırdavatı',
    '25 mm boru fiber (Plasterm)',
    '25 mm boru sadə (Plasterm)',
    '40 mm boru fiber',
    '50 mm boru fiber',
    '32 mm əks qlapan (disk)',
    'Boya 2 lt',
    'Divar tipli qazan 115 kW',
    'Dövriyyə nasosu (Wilo)',
    '50 mm boru fiber',
    '32 mm çuxol (flex)',
    '25 mm çuxol (flex)',
    'PPRC Boru xırdavatı 40%',
    'Kalanizasiya borusu 100 mm',
    'Radyator seksiyas (Rusiya)',
    'Radyator vintili (cakamini)',
    'Radyator bağlantısı',
    'Kalanizasiya borusu 50 mm',
    'Boru xırdavatı 30%',
    'Kalanizasiya boru xırdavatı 50%',
    'Trap 10*30',
    'Tangit ip 160 mt.',
    'Trap 10*10',
    '15 dəmir traynik',
    '15 dəmir xamut',
    'Antifriz (Felix)',
    'Kollektor K.A.S 5 çıxışlı',
    'Dövriyyə nasosu 0.75 kW',
    'Dövriyyə nasosu 0.9 kW',
    'Resirkulyasiya top/z bronzo',
    'Boyler 1000 lt',
    'Esenjor',
    'Kombi 125 kW',
    'Kombi 24 kW (İtalterm)',
    'Qaz requlyatoru (İtaliya)',
    'Qaz manometr',
    'Qaz şlankı',
    'Qaz vintili (Klepsan)',
    'Genişlenme çəni 100 lt',
    'Su təhcizah nasosu (stansiya)',
    '32 mm üçyollu motor',
    '15 mm dəmir boru',
    '50 mm dəmir boru',
    '108 mm dəmir boru',
    '159 mm dəmir boru',
    '219 mm dəmir boru',
    '89 mm dəmir boru',
    '32 mm siyirtmə vintil',
    '50 mm siyirtmə vintil',
    '108 mm siyirtmə vintil',
    '108 mm bronzo filtir',
    '15 mm dəmir vintil (Klepsan)',
    '20 mm dəmir vintil (Klepsan)',
    '50 mm dəmir vintil',
    '32 mm əks qlapan',
    '108 mm flyans',
    '50 mm əks qlapan',
    '89 mm əks qlapan',
    '5*5 uqolnik',
    '5*10 şifeller',
    'Elektrik şit, Elektrikler xəttləri və s.',
    'Yanğın dolabı (Fetaş)',
    '65 mm dəmir boru',
    'Motor 10 m³/8 bar',
    '20 bronzo filtir (Klepsan)',
    '32 ¾ çöl diş rekor',
    'Kollektor dolabı',
    'Kollektor 8 çıxışlı',
    'Kollektor 10 çıxışlı',
    'Elektroqlapan',
    'Limit sensoru',
    'Kollektor xamutu',
    'Pena',
    'Dövriyyə nasosu',
    '32 flans',
    '32 mm çöl diş amerkanka',
    '32 mm amerkanka',
    'Termoregulyator',
    '16 mm sadə boru',
    '16 mm sadə boru (Rusiya)',
    '16 mm pres mufta (İtaliya)',
    'Sitrafor',
    '18 mm skoba',
    '3 mm izoliyasiya',
    '16 mm izoliyasiyalı boru',
    '16 1/2 iç diş dirsək (pres)',
    '15 dirsək',
    '20 mm dəmir boru',
];

let sortedNames = names.sort();
//reference
let add_malin_adi_input = document.getElementById("add_malin_adi");
//Execute function on keyup
add_malin_adi.addEventListener("keyup", (e) => {
    //loop through above array
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
    removeElements();
    for (let i of sortedNames) {
        //convert input to lowercase and compare with each string
        if (
            i.toLowerCase().includes(add_malin_adi.value.toLowerCase()) &&
            add_malin_adi.value != ""
        ) {
            //create li element
            let listItem = document.createElement("li");
            //One common class name
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");
            //Display matched part in bold
            // let word = i.substring(0, add_malin_adi.value.length) + "<b>" + i.substring(0, add_malin_adi.value.length) + "</b>" + i.substring(0, add_malin_adi.value.length);
            let word = "<b>" + i.substring(0, add_malin_adi.value.length) + "</b>"
            word += i.substring(add_malin_adi.value.length);

            //display the value in array
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});

function displayNames(value) {
    add_malin_adi.value = value;
    if (add_malin_adi.value.includes('boru')) {
        add_olcu_vahidi.value = 'mt'
    } else {
        add_olcu_vahidi.value = 'əd'
    }
    removeElements();
}

function removeElements() {
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
}

// --------------

// Item Row

function printItemRows() {
    var hrefs = document.querySelectorAll('.rowNumber')
    var result = []
    hrefs.forEach(function (e) {
        result.push(e.innerText)
    })
    return result
}

// Item Names

function printItemNames() {
    var hrefs = document.querySelectorAll('#malin_adi')
    var result = []
    hrefs.forEach(function (e) {
        result.push(e.innerText)
    })
    return result
}

// Item Olcu Vahidi

function printItemOlcuVahidi() {
    var hrefs = document.querySelectorAll('#olcu_vahidi')
    var result = []
    hrefs.forEach(function (e) {
        result.push(e.innerText)
    })
    return result
}

// Item Miqdar

function printItemMiqdar() {
    var hrefs = document.querySelectorAll('#miqdar')
    var result = []
    hrefs.forEach(function (e) {
        result.push(e.innerText)
    })
    return result
}

// Item Qiymet

function printItemQiymet() {
    var hrefs = document.querySelectorAll('#qiymet')
    var result = []
    hrefs.forEach(function (e) {
        result.push(e.innerText)
    })
    return result
}

// Item Mebleg

function printItemMebleg() {
    var hrefs = document.querySelectorAll('#mebleg')
    var result = []
    hrefs.forEach(function (e) {
        result.push(e.innerText)
    })
    return result
}

document.querySelector('#pdf').addEventListener('click', function () {
    
    var teklifinAdi = document.querySelector('.teklifinAdi').value
    var totalNeqliyyat = document.querySelector('.totalNeqliyyat').value
    var totalIscilik = document.querySelector('.totalIscilik').value
    var cem = document.querySelector('#cem').innerText

    var tableBody = [
        [{
            text: 'No',
            color: 'white',
            style: 'tableHeader',
            alignment: 'center'
        }, {
            text: 'Malın Adı',
            color: 'white',
            style: 'tableHeader',
            alignment: 'left'
        }, {
            text: 'Ölçü\nVahidi',
            color: 'white',
            style: 'tableHeader',
            alignment: 'center'
        }, {
            text: 'Miqdar',
            color: 'white',
            style: 'tableHeader',
            alignment: 'center'
        }, {
            text: 'Qiymət',
            color: 'white',
            style: 'tableHeader',
            alignment: 'center'
        }, {
            text: 'Məbləğ',
            color: 'white',
            style: 'tableHeader',
            alignment: 'center'
        }, ],
        [{}, {
            text: 'Nəqliyyat',
            style: 'tableHeader',
            alignment: 'left'
        }, {}, {}, {}, {
            text: totalNeqliyyat,
            alignment: 'center'
        }, ],
        [{}, {
            text: 'İşçilik',
            style: 'tableHeader',
            alignment: 'left'
        }, {}, {}, {}, {
            text: totalIscilik,
            alignment: 'center'
        }, ],
        [{}, {
            text: 'Cəm',
            style: 'tableHeader',
            alignment: 'left'
        }, {}, {}, {}, {
            text: cem,
            alignment: 'center'
        }, ],
    ]

    for (var i = 0; i < printItemRows().length; i++) {

        tableBody.splice(tableBody.length - 3, '', [{
            text: printItemRows()[i],
            alignment: 'center'
        }, {
            text: printItemNames()[i],
            alignment: 'left'
        }, {
            text: printItemOlcuVahidi()[i],
            alignment: 'center'
        }, {
            text: printItemMiqdar()[i],
            alignment: 'center'
        }, {
            text: printItemQiymet()[i],
            alignment: 'center'
        }, {
            text: printItemMebleg()[i],
            alignment: 'center'
        }, ], )
    }

    var tableCon = [{
            text: teklifinAdi, // Tables
            style: 'header',
            alignment: 'center'
        },
        {
            style: 'tableExample',
            width: '150%',
            alignment: 'center',
            table: {
                body: tableBody,
                width: ['*', '*', '*', ]
            },
            layout: {
                fillColor: function (rowIndex, node, columnIndex) {
                    return (rowIndex === 0) ? '#6cc3d4' : null;
                }
            }
        },
    ]

    var docDefinition = {
        content: tableCon,
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 10, 0, 5]
            },
            tableExample: {
                margin: [75, 0, 0, 0],
                fontSize: 14,
            },
            tableHeader: {
                bold: true,
                fontSize: 13,
                color: 'black'
            }
        }
    }

    if (printItemRows().length == 0) {
        alert('Məhsul daxil edin.')
    } else if (teklifinAdi == ''){
        alert('Təklifin adını qeyd edin.')
    } else if (add_malin_adi.value == ''  || add_miqdar.value == '' || add_olcu_vahidi == '' || add_qiymet == ''){
        alert('Məhsul tam yazın.')
    } else {
        pdfMake.createPdf(docDefinition).download(teklifinAdi + '.pdf')
    }
})

const btnDownloadCsv = document.getElementById("csv");

btnDownloadCsv.addEventListener("click", () => {

    var teklifinAdi = document.querySelector('.teklifinAdi').value
    var totalNeqliyyat = document.querySelector('.totalNeqliyyat').value
    var totalIscilik = document.querySelector('.totalIscilik').value
    var cem = document.querySelector('#cem').innerText


    var csvData = [{
        "No": '',
        "Malın Adı": 'Nəqliyyat xərcləri',
        "Ölçü Vahidi": '',
        "Miqdar": '',
        "Qiymət": '',
        "Məbləğ": totalNeqliyyat,
    },{
        "No": '',
        "Malın Adı": 'İşçilik',
        "Ölçü Vahidi": '',
        "Miqdar": '',
        "Qiymət": '',
        "Məbləğ": totalIscilik,
    },{
        "No": '',
        "Malın Adı": 'Cəmi',
        "Ölçü Vahidi": '',
        "Miqdar": '',
        "Qiymət": '',
        "Məbləğ": cem,
    },{
        "No": '',
        "Malın Adı": '',
        "Ölçü Vahidi": '',
        "Miqdar": '',
        "Qiymət": '',
        "Məbləğ": '',
    },{
        "No": '',
        "Malın Adı": 'Təklifin adı',
        "Ölçü Vahidi": '',
        "Miqdar": '',
        "Qiymət": '',
        "Məbləğ": teklifinAdi,
    }]

    

    for (var i = 0; i < printItemRows().length; i++) {

        csvData.splice(csvData.length - 5, '',({
            "No": printItemRows()[i],
            "Malın Adı": printItemNames()[i],
            "Ölçü Vahidi": printItemMiqdar()[i],
            "Miqdar": printItemMiqdar()[i],
            "Qiymət": printItemQiymet()[i],
            "Məbləğ": printItemMebleg()[i],
        })
        )
    }

    console.log(csvData)

    if (printItemRows().length == 0) {
        alert('Məhsul daxil edin.')
    } else if (teklifinAdi == ''){
        alert('Təklifin adını qeyd edin.')
    } else if (add_malin_adi.value == ''  || add_miqdar.value == '' || add_olcu_vahidi == '' || add_qiymet == ''){
        alert('Məhsul tam yazın.')
    } else {
        downloadCsv(teklifinAdi + ".csv", json2csv.parse(csvData));
    }


function downloadCsv(filename, csvData) {
    const element = document.createElement("a");

    element.setAttribute("href", `data:text/csv;charset=utf-8,${csvData}`);
    element.setAttribute("download", filename);
    element.style.display = "none";

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

});
