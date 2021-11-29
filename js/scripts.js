
console.log('start')

const onPress = async () => { 
  try {
    const value = document.getElementById('text-input').value;
    //123456789999
    JsBarcode("#barcode", value, { format: "UPC" });
    document.getElementById("error-text").innerText = "";

  } catch (e) {
    console.log(e);
    document.getElementById("error-text").innerText = e;
  }
}