/**
 * Created by muhammadsuhail on 2016-05-21.
 */
export default class Locale{
constructor(){
  this._language="FR"
}

  get language(){
    return this._language;
  }

  set language(lang){
    this._language=lang;
  }




}
