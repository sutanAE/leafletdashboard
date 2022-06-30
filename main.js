var map = L.map('themap').setView([51.886134,-0.574050], 7);

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
})

osm.addTo(map);





// var marker = L.marker([51.886134,-0.574050]).addTo(map);



var circle = L.marker([51.886134,-0.574050], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
})

circle.addTo(map)
circle.bindPopup('<b>Hello world!</b><br />I am a popup.')


var popup = L.popup()
    .setLatLng([51.497950,-0.079958])
    .setContent("I am a standalone popup.")
    .openOn(map);

async function loadFile(file) {
    let text = await file.text();
    console.log(text);
    return text
}

var x;

fetch('form.html')
  .then(response => response.text())
  .then(data => x = data);
  
console.log(x)

const request = async () =>{
const response = await fetch('form.html');
const theform = await response.text();
return theform
}
var host = window.location.host; 

var zz = request()

console.log("prnting the form")
console.log(zz)


map.on('click', (e)=>{
    var coords = [e.latlng.lat, e.latlng.lng]
    var popup_clicked = L.popup({minWidth: 1000})

    var sometext = "!!!local text tile!!!"

    popup_clicked.setLatLng(coords)
    popup_clicked.bindPopup()
    popup_clicked.setContent(
        `let's get a query here!.<br>\
        the lat is ${coords[0]} and the lon is ${coords[1]}<br>\
        <a href='http://${host}/survey/?lat=${coords[0]},lon=${coords[1]}' target='_blank'>get to the survey</a>\
        `
        )
    popup_clicked.openOn(map);

    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    // download(JSON.stringify({'lat': coords[0], 'lon': coords[1]}), 'json.txt', 'text/plain');
    
    // alert("You clicked the map at " + e.latlng);

});






        
// map with servers
//         L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);


//         const apiUrl = 'https://gis.london.gov.uk/arcgis/rest/services/open/pop_2021_test/MapServer/0/query?where=OBJECTID+%3E+0&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&having=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&queryByDistance=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=geojson'

//         async function getJson(url) {
//             let response = await fetch(url);
//             let data = await response.json()
//             return data;
//         }

//         async function main(apiUrl) {
//             jsondata = await getJson(apiUrl)
//             L.geoJSON(jsondata).addTo(map);
            
//         }

//         main(apiUrl)