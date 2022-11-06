<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta charset="utf-8" />
    <title>HTML Grasshopper Interface</title>
    <meta name="author" content="Petr Mitev">
    <style>
        html,
        body {

            margin: 5px;
            padding: 0;
            box-sizing: border-box;
        }

        #app {
            font-family: "Avenir", Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #2c3e50;
            display: grid;
            grid-template-columns: auto auto;
        }

        .konsept {
            display: grid;          
            //yanyanaalırsandaha iyi mi web mi mobil mi 
              
        }

        .parametreler {
            display: grid;                
            flex-direction: column;
            
        }

        .grid-container {
            float: right;
            display: grid;
            width: 100%;
            grid-template-rows: auto auto auto auto;
            grid-template-columns: auto auto auto auto;
            
        }

        .label-container {
           
            display: grid;
            grid-template-rows: auto auto auto auto;
            
            padding: 10px;
        }            

        .model {
            flex-direction: column;
        }

        .tab {
            display: inline-block;
            margin-left: 10px;
        }
    </style>

</head>

<body>




    <div id="app">

        <div class="konsept">
        
            <div >
                <input type="radio" name="a" value="a" id="a" />
                <label for="a">
                <img src="https://www.tumbleweedhouses.com/wp-content/uploads/Cedar-Red-Elm-400x269.jpg"
                alt="option 3"
                height="100px"></label>
            </div>
            <div >
                <input type="radio" name="a" value="b" id="b" />
                <label for="b" >
                <img src="https://www.tumbleweedhouses.com/wp-content/uploads/Tumbleweed_Roanoke-400x267.jpg" 
                alt="Option 2"
                height="100px"></label>
            </div>

            <div >
                <input type="radio" class="a" value="c" id="c" />
                <label for="c" >
                <img src="https://www.tumbleweedhouses.com/wp-content/uploads/tumbleweed-tiny-house-image-five-cypress-20-600-x-400-400x267.jpg" 
                alt="Option 2"
                height="100px"></label>
            </div>

            <form action="/action_page.php">
                <label for="type">Konsept seçiniz</label>
                <select id="types" name="type">

                 <option value="tip1" >loft yok</option>
                 <option value="tip2">tek loft</option>
                 <option value="tip3">çift loft</option>
                
                </select>
            </form>
            <br>
        </div>

        <div class="parametreler">

            <h1>
                <img width="50"style="float:left;width:42px;height:42px;"
            src="https://img.icons8.com/ios/452/sorting-options--v1.png"
            alt="App Logo" >
                <tab class="tab">Parametreler
            </h1>
            
            <div class="grid-container">
                <div class="label-container">
                    <label for="length">Uzun Kenar</label>
                    <input type="range" id="length" min="400" max="850" step="1" value="500">
                    <p> <span id="demo"></span> cm</p>
                </div>
                <br>
                <div class="label-container">
                    <label for="width">Kısa Kenar</label>
                    <input type="range" id="width" min="190"00" max="270" step="1" value="210">
                    <p> <span id="demo2"></span> cm</p>
                </div>
                <br>
                <div class="label-container">
                    <label for="studSpace">Banyo Genişliği</label>
                    <input type="range" id="bath" min="90" max="150" step="0.1" value="120">
                    <p> <span id="demo3"></span> cm</p>
                </div>
                <br>
                <div class="label-container">
                    <label for="studSize">Loft Genişliği  </label>
                    <input type="range" id="loft" min="180" max="240" step="1" value="200">
                    <p> <span id="demo4"></span> cm</p>
                </div>
                
            </div>
            <br>

        </div>

        <div class="model">
            <h1>
                <img width="50" style="float:left;width:52px;height:42px;"
            src="https://cdn-icons-png.flaticon.com/512/1797/1797426.png">
                <tab class="tab">Üçboyutlu Model
            </h1>

            <iframe style="border:5px solid blue;" width="500" height="315" margin="5px"
                src="https://viewer.shapediver.com/v2/2.14.0/iframe/remote_iframe.html">

            </iframe>
        </div>

        <div class="results">
            <!-- <div>
                <input type="button" onclick="function" id="exportButton" value="Sonuçları göster"><br>
            </div> -->
            <h1>
                <img width="50"style="float:left;width:52px;height:42px;"
            src="https://cdn1.iconfinder.com/data/icons/office-322/24/document-check-checklist-list-256.png"
            alt="App Logo" >
                <tab class="tab">Sonuçlar
            </h1>

            <div class="label-container">

                <label for="wallAreaLabel">Metrekare:</label>
                <p id="wallAreaLabel">100</p>
            </div>
            <div class="label-container">
                <label for="wallVolumeLabel">Maksimum yükseklik:</label>
                <p id="wallVolumeLabel">100</p>
            </div>
            <div class="label-container">
                <label for="studCountLabel">C02 oranı:</label>
                <p id="studCountLabel">100</p>
            </div>
        </div>

    </div>
    <script>
        var slider1 = document.getElementById("length");
        var demo = document.getElementById("demo");
         demo.innerHTML = slider1.value;

    slider1.oninput = function() {
    demo.innerHTML = this.value;}
    </script>

    <script>
        var slider2 = document.getElementById("width");
         var demo2 = document.getElementById("demo2");
          demo2.innerHTML = slider2.value;

    slider2.oninput = function() {
     demo2.innerHTML = this.value;}
    </script>
    <script>
        var slider3 = document.getElementById("bath");
         var demo3 = document.getElementById("demo3");
          demo3.innerHTML = slider3.value;

    slider3.oninput = function() {
     demo3.innerHTML = this.value;}
    </script>
    <script>
        var slider4 = document.getElementById("loft");
         var demo4 = document.getElementById("demo4");
          demo4.innerHTML = slider4.value;

    slider4.oninput = function() {
     demo4.innerHTML = this.value;}
    </script>

</body>

</html>
