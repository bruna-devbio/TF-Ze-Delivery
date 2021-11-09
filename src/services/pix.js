export const QrCodePay = async () => {
  try {
    const response = await fetch("https://api.qr.io/v1/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "apikey":"YOUR_API_KEY",
        "data":"https://qr.io",
        "transparent":"on",
        "frontcolor":"#000000",
        "marker_out_color":"#000000",
        "marker_in_color":"#000000",
        "pattern":"default",
        "marker_in":"default",
        "optionlogo":"none"
      }),
    });
    console.log(response);
    const json = await response.json();
    return json;
  } catch (json) {
    const codigo = json.code;
    if (codigo === 400 || codigo === 403) {
      throw new Error(json.message);
    }
  }
  
};
