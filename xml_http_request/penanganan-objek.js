//Untuk memperjelas masalah penanganan objek utama pada poin ketiga, perhatikan kode berikut:

var kosong = JSON.parse(data, function(k,v){
    return v * 2;
});

var isi  = JSON.parse(data,function(k,v){
    // if (k === "") return v;
    if(k === " " || typeof v === "object") return v;

    return v* 2;
});

kosong; //NaN
isi; // // {"satu": 2, "dua": 4, "tiga": {"empat": 8, "lima": 10}}

//Memanfaatkan pengetahuan ini, 
//kita dapat mengembangkan fungsi reviver yang membuat objek 
// penuh beserta dengan method baru seperti berikut:

var response = "{\"health\":3000, \"mana\":400,\"str\":86, \"agi\":63, \"int\":66}";
var reviver = function (k,v){
    if ( k === " "){
        v.getStr = function(){
            return v.str;
        }
        return v;
    }
    return v*2;
}

var TransformedObj = JSON.parse(response, reviver);
TransformedObj["health"];
TransformedObj.mana;
TransformedObj.getStr();


//mengubah objek ke string
var obj = {
    model: "L925",
    size: "3.2",
    age : 18,
    conn : "4G"
};

var jsonString = JSON.stringify(obj);
jsonString; // '{"model":"L925","size":3.5,"age":18,"conn":"4G"}'

var filteredJSON = JSON.stringify(obj, function(k,v){
    if (typeof v === "string") return undefined;
    return v;
});
filteredJSON; // '{"size":3.5,"age":18}'

//Jika diisikan dengan array, isi dari array akan
// dianggap menjadi atribut yang ingin kita masukkan dalam string JSON, seperti berikut:

var altJSON = JSON.stringify(obj, ["model","onn"]);
altJSON; //'{"model":"L925","conn":"4G"}'

/*. Jika parameter ketiga diisikan angka, 
maka angka tersebut akan menjadi jumlah spasi yang dimasukkan pada pemisah string JSON.
 Langsung saja, berikut contoh penggunaannya:
*/

JSON.stringify(obj,["model","conn"], "\t");
// keluaran:
// "{
//    "model": "L925",
//    "conn": "4G"
// }"

JSON.stringify(obj,["model","conn"], "aaa");
// keluaran:
// "{
// aaaa"model": "L925",
// aaaa"conn": "4G"
// }"

JSON.stringify(obj, ["model","conn"],4);
// keluaran:
// "{
//     "model": "L925",
//     "conn": "4G"
// }"