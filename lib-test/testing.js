// const translate = require("@iamtraction/google-translate")
import translate from "@iamtraction/google-translate"
const text = "hello world"
export const Translate = translate(text, {from: "en", to: "ar"}).then((res) => {
  console.log(res.text)
})
