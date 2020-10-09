"use strict"
// global filter
Vue.filter ('capitalize', (value)=>{
    if(!value){return ''}
    else {
        value = value.toString();
        return value.replace(/\b\w/g, function(l){
            return l.toUpperCase();
        })
    }
});

Vue.filter('lowerCase', (value)=>{
    if(!value){
        return '';
    }
    return value.toLowerCase();
});

Vue.filter( 'lengthStr', (value)=>{
    const val = typeof(value);
    if(val === 'string'){
        return value;
    }
});

Vue.component ('app-strings', {
    data: function(){
         return {
            strings:  [
               
              ],
              checked: true,
              inputValue: '',
              update:'',
         }
     },
     methods: { 
         alert(){
            console.log(this.inputValue);
     },
    },
     template: '<div>  <input type="text" placeholder="inter text" v-on:input="alert" @input="inputValue = $event.target.value" /> <p>{{inputValue}}</p> <input type="checkbox" id="checkbox" v-model="checked" /> <div class = "strings" v-if="checked"> <p v-for = "(str, ind) in strings">{{ind + 1}} - {{str | lowerCase}}</p> </div> <div v-else><p v-for="(str, ind) in strings" >{{ind+1}}-{{str | lengthStr}}</p></div> </div>'
     });

 

new Vue({
    el: '#app',
    data: {
        strings:  [
            "affenpinscher",
    "whippet",
    "african",
    "irish wolfhound",
    "pembroke",
    "airedale",
    "NEWFOUNDLAND",
    "OTTERHOUND",
    "PAPILLON",
    "PEKINESE",
    "SWISS MOUNTAIN",
    "weimaraner",
    "MINIATURE PINSCHER",
    "akita",
    "GERMAN POINTER",
    "vizsla",
    "POMERANIAN",
    "appenzeller",
    "MINIATURE POODLE",
    "yorkshire terrier",
    "STANDARD POODLE",
    "basenji",
    "BERNESE MOUNTAIN",
    "wheaten terrier",
    "TOY POODLE",
    "beagle",
    "MEXICANHAIRLESS",
    "westhighland terrier",
    "PUG",
    "bluetick",
    "TIBETAN MASTIFF",
    "toy terrier",
    "PYRENEES",
    "borzoi",
    "BULL MASTIFF",
    "tibetan terrier",
    "REDBONE",
    "bouvier",
    "MALTESE",
    "silky terrier",
    "CHESAPEAKE RETRIEVER",
    "boxer",
    "MALINOIS",
    "sealyham terrier",
    "CURLY RETRIEVER",
    "brabancon",
    "MALAMUTE",
    "scottish terrier",
    "FLATCOATED RETRIEVER",
    "briard",
    "LHASA",
    "patterdale terrier",
    "GOLDEN RETRIEVER",
    "boston bulldog",
    "LEONBERG",
    "norwich terrier",
    "RHODESIAN RIDGEBACK",
    "french bulldog",
    "LABRADOR",
    "norfolk terrier",
    "ROTTWEILER",
    "staffordshire bullterrier",
    "KUVASZ",
    "lakeland terrier",
    "SALUKI",
    "cairn",
    "KOMONDOR",
    "kerryblue terrier",
    "SAMOYED",
    "chihuahua",
    "KELPIE",
    "irish terrier",
    "SCHIPPERKE",
    "chow",
    "KEESHOND",
    "fox terrier",
    "GIANT SCHNAUZER",
    "clumber",
    "HUSKY",
    "dandie terrier",
    "MINIATURE SCHNAUZER",
    "border collie",
    "WALKER HOUND",
    "border terrier",
    "ENGLISH SETTER",
    "coonhound",
    "ENGLISH HOUND",
    "bedlington terrier",
    "GORDON SETTER",
    "cardigan corgi",
    "BLOOD HOUND",
    "australian terrier",
    "IRISH SETTER",
    "dachshund",
    "BASSET HOUND",
    "american terrier",
    "ENGLISH SHEEPDOG",
    "great dane",
    "AFGHAN HOUND",
    "stbernard",
    "SHETLAND SHEEPDOG",
    "scottish deerhound",
    "IBIZAN HOUND",
    "english springer",
    "SHIBA",
    "dhole",
    "GROENENDAEL",
    "welsh spaniel",
    "SHIHTZU",
    "dingo",
    "ITALIAN GREYHOUND",
    "sussex spaniel",
    "BLENHEIM SPANIEL",
    "doberman",
    "GERMANSHEPHERD",
    "japanese spaniel",
    "BRITTANY SPANIEL",
    "norwegian elkhound",
    "ESKIMO",
    "irish spaniel",
    "COCKER SPANIEL",
    "entlebucher",
    "ENTLEBUCHER",
    "cocker spaniel",
    "IRISH SPANIEL",
    "eskimo",
    "NORWEGIAN ELKHOUND",
    "brittany spaniel",
    "JAPANESE SPANIEL",
    "germanshepherd",
    "DOBERMAN",
    "blenheim spaniel",
    "SUSSEX SPANIEL",
    "italian greyhound",
    "DINGO",
    "shihtzu",
    "WELSH SPANIEL",
    "groenendael",
    "DHOLE",
    "shiba",
    "ENGLISH SPRINGER",
    "Ibizan hound",
    "SCOTTISH DEERHOUND",
    "shetland sheepdog",
    "STBERNARD",
    "afghan hound",
    "GREAT DANE",
    "english sheepdog",
    "AMERICAN TERRIER",
    "basset hound",
    "DACHSHUND",
    "irish setter",
    "AUSTRALIAN TERRIER",
    "blood hound",
    "CARDIGAN CORGI",
    "gordon setter",
    "BEDLINGTON TERRIER",
    "english hound",
    "COONHOUND",
    "english setter",
    "BORDER TERRIER",
    "walker hound",
    "BORDER COLLIE",
    "miniature schnauzer",
    "DANDIE TERRIER",
    "husky",
    "CLUMBER",
    "giant schnauzer",
    "FOX TERRIER",
    "keeshond",
    "CHOW",
    "schipperke",
    "IRISH TERRIER",
    "kelpie",
    "CHIHUAHUA",
    "samoyed",
    "KERRYBLUE TERRIER",
    "komondor",
    "CAIRN",
    "saluki",
    "LAKELAND TERRIER",
    "kuvasz",
    "STAFFORDSHIRE BULLTERRIER",
    "rottweiler",
    "NORFOLK TERRIER",
    "labrador",
    "FRENCH BULLDOG",
    "rhodesian ridgeback",
    "NORWICH TERRIER",
    "leonberg",
    "BOSTON BULLDOG",
    "golden retriever",
    "PATTERDALE TERRIER",
    "lhasa",
    "BRIARD",
    "flatcoated retriever",
    "SCOTTISH TERRIER",
    "malamute",
    "BRABANCON",
    "curly retriever",
    "SEALYHAM TERRIER",
    "malinois",
    "BOXER",
    "chesapeake retriever",
    "SILKY TERRIER",
    "maltese",
    "BOUVIER",
    "redbone",
    "TIBETAN TERRIER",
    "bull mastiff",
    "BORZOI",
    "pyrenees",
    "TOY TERRIER",
    "tibetan mastiff",
    "BLUETICK",
    "pug",
    "WESTHIGHLAND TERRIER",
    "mexicanhairless",
    "BEAGLE",
    "toy poodle",
    "WHEATEN TERRIER",
    "bernese mountain",
    "BASENJI",
    "standard poodle",
    "YORKSHIRE TERRIER",
    "miniature poodle",
    "APPENZELLER",
    "pomeranian",
    "VIZSLA",
    "german pointer",
    "AKITA",
    "miniature pinscher",
    "WEIMARANER",
    "swiss mountain",
    "AIREDALE",
    "pekinese",
    "WHIPPET",
    "papillon",
    "AFRICAN",
    "otterhound",
    "IRISH WOLFHOUND",
    "newfoundland",
    "PEMBROKE",
    "AFFENPINSCHER"
          ],
          checked: true,
          inputValue: '',
          message: [],
    },

    methods:{
        funcLength(){
            let leng = this.inputValue;
            let array = this.strings.filter((str)=>{
                return str.length > leng;
            });
            this.message = array;                                  
        },
        funcUnderStr(){
            //const pattern = this.inputValue;

            // if(this.checked){
            //    let pattern = this.inputValue;

            //    let arr = this.strings.filter((st)=>{
            //     // return (st.indexOf(pattern) === -1); // not working!!!
            //     return st.includes(pattern);
            //   });
            //  this.message = arr;
            // }
            // else{
            //     let pattern = this.inputValue.toLowerCase();
                            
            //    let arr = this.strings.filter((st)=>{
            //     return st.toLowerCase().includes(pattern);
            //   });
            //  this.message = arr;
            // }  
            
            this.message = this.strings.filter((st) =>
      (this.checked ? st : st.toLowerCase()).includes(
        this.checked ? this.inputValue : this.inputValue.toLowerCase()) );

        },
    },
    // вычеслиные свойств
     computed:{ 
         doubleValue(){
             this.value*2
             return true;
         },
         showMess(){
             // alert(this.message);
             return this.message.toUpperCase();
         }
    },
    filters:{
        lowerCase(value){
            return value.toLowerCase();
        },
        upperCase(value){
            return value.toUpperCase();
        },
    }
});

