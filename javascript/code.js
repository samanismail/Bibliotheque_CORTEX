function cliqueBarreRecherche() {
        if(document.getElementById("txtChercher").value == "Que cherchez-vous ?")
        {
                document.getElementById("txtChercher").value = "";
        }

        else
        {
                window.location.reload();
        }

}
function logo()
{
        var canvas = document.getElementById("c1");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(40, 40, 40, Math.PI/2,  Math.PI*1.5);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(40, 40, 20, Math.PI/2,  Math.PI*1.5);
        ctx.stroke();
        ctx.fillStyle = "yellow";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(60, 40, 40, Math.PI*1.5,  Math.PI/2);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(60, 40, 20, Math.PI*1.5,  Math.PI/2);
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 40);
        ctx.lineTo(110, 40);
        ctx.lineWidth=10;
        ctx.strokeStyle="orange";
        ctx.stroke();
}

function chercher(){
        var filtreVar = document.getElementById("filtre");
        var filtreValue = filtreVar.options[filtreVar.selectedIndex].value;

        var motifVar = document.getElementById("txtChercher");
        var motifFilter = motifVar.value.toUpperCase();

        var contenu = document.getElementById("home-content");
        var article;
        var trouve;
        var script = "<table>\n" +
            "                <tr>\n";
        if(filtreValue === "auteurs")
        {
                article = document.getElementsByClassName("articleAuteur");

                var auteur;
                for( var i=0; i<article.length;i++)
                {
                        auteur = article[i].getElementsByClassName("titre")[0].getElementsByClassName("auteur")[0].textContent;
                        if(auteur.toUpperCase().includes(motifFilter,0))
                        {
                                script += "<td>\n" +
                                    "<div class=\"article articleAuteur tous\">";
                                trouve = article[i].getElementsByClassName("auteur")[0];
                                script += trouve.parentElement.parentElement.innerHTML;
                                script += "</div>\n" +
                                    "                    </td>\n";
                        }
                }
                script += "               </tr>\n" +
                    "</table>";

                contenu.innerHTML=script;

        }
        else if(filtreValue === "audios")
        {

                article = document.getElementsByClassName("articleAudio");

                var audio;
                for( var j=0; j<article.length;j++)
                {

                        audio = article[j].getElementsByClassName("titre")[0].textContent;
                        if(audio.toUpperCase().includes(motifFilter,0))
                        {
                                script += "<td>\n" +
                                    "<div class=\"article articleAudio tous\">";
                                trouve = article[j].getElementsByClassName("titre")[0];
                                script += trouve.parentElement.innerHTML;
                                script += "</div>\n" +
                                    "                    </td>\n";
                        }
                }
                script += "               </tr>\n" +
                    "</table>";

                contenu.innerHTML=script;
        }

        else if(filtreValue === "tous")
        {

                article = document.getElementsByClassName("tous");

                var tous;
                for( var k=0; k<article.length;k++)
                {
                        tous = article[k].getElementsByClassName("titre")[0].textContent;
                        if(tous.toUpperCase().includes(motifFilter,0))
                        {
                                script += "<td>\n" +
                                    "<div class=\"article tous\">";
                                trouve = article[k].getElementsByClassName("titre")[0];
                                script += trouve.parentElement.innerHTML;
                                script += "</div>\n" +
                                    "                    </td>\n";
                        }
                }
                script += "               </tr>\n" +
                    "</table>";

                contenu.innerHTML=script;
        }
        var vide= "<table>\n" +
            "                <tr>\n"+
        "               </tr>\n" +
        "</table>";
      if(script==vide)
      {

      }
}

//Javascript affichage date page Autre

function datedujour(){
        var date = new Date();
        if(document.getElementById("Date").innerHTML =="")
        {
                document.getElementById("Date").innerHTML = "Nous sommmes le " +date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+ " et il est " + date.getHours() +"h";
                if(date.getMinutes()<10)
                {
                        document.getElementById("Date").innerHTML += "0"+ date.getMinutes() +"."
                }
                else
                {
                        document.getElementById("Date").innerHTML += date.getMinutes() +"."
                }
        }
        else
        {
                document.getElementById("Date").innerHTML =""
        }
}


var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

function RAZcanevas(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function tracePt(x1,y1,colorBez3,dimPt){
        ctx.beginPath();
        ctx.fillStyle=colorBez3;
        ctx.fillRect(x1-dimPt/2,y1-dimPt/2,dimPt,dimPt);
        ctx.stroke();
        ctx.closePath();
}

function TracePolygone(xA,yA,xB,yB,xC,yC,xD,yD,colorBez3,widthBez3){
        ctx.lineWidth = widthBez3;
        ctx.strokeStyle = colorBez3;
        ctx.beginPath();
        ctx.moveTo(xA,yA);
        ctx.lineTo(xB,yB);
        ctx.lineTo(xC,yC);
        ctx.lineTo(xD,yD);
        ctx.stroke();
        ctx.closePath();
}
function TraceBez3(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,colorBez3,widthBez3){
        ctx.lineWidth = widthBez3;
        ctx.strokeStyle = colorBez3;
        ctx.beginPath();
        ctx.moveTo(xPt1,yPt1);
        ctx.bezierCurveTo(xPt2,yPt2,xPt3,yPt3,xPt4,yPt4);
        ctx.stroke();
        ctx.closePath();
}
function TraceBez2(xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2){
        ctx.lineWidth = widthBez2;
        ctx.strokeStyle = colorBez2;
        ctx.beginPath();
        ctx.moveTo(xPt5,yPt5);
        ctx.quadraticCurveTo(xPt6,yPt6,xPt7,yPt7);
        ctx.stroke();
        ctx.closePath();
}


function affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3,colorBez3S,widthBez3S,dimPt,bolCbe,bolSeg,bolPt){
        RAZcanevas();
        if (bolCbe) {
                TraceBez3(xPt1, yPt1, xPt2, yPt2, xPt3, yPt3, xPt4, yPt4, colorBez3, widthBez3);
                TraceBez2(xPt5, yPt5, xPt6, yPt6, xPt7, yPt7, colorBez2, widthBez2)
        }
        /*if (bolSeg)
            TracePolygone(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,colorBez3S,widthBez3S);*/
        if (bolPt){
                tracePt(xPt1,yPt1,"#ff0000",dimPt);
                tracePt(xPt2,yPt2,"#00ff00",dimPt);
                tracePt(xPt3,yPt3,"#25D151",dimPt);
                tracePt(xPt4,yPt4,"#581845",dimPt);
                tracePt(xPt5,yPt5,"#F5FC0D",dimPt);
                tracePt(xPt6,yPt6,"#0000ff",dimPt);
                tracePt(xPt7,yPt7,"#FC00ED",dimPt);
        }
}

function init() {
        logo();
        let xPt1 = 40, yPt1 = 20, xPt2 = 40, yPt2 = 250, xPt3 = 450, yPt3 = 50, xPt4 = 500, yPt4 = 250;
        let colorBez3 = "#FF6600", widthBez3 = 3, colorBez3S = "#FF00FF", widthBez3S = 2, dimPt = 10;
        TraceBez3(xPt1, yPt1, xPt2, yPt2, xPt3, yPt3, xPt4, yPt4, colorBez3, widthBez3);
        let xPt5 = 100, yPt5 = 200, xPt6 = 250, yPt6 = 350, xPt7 = 500, yPt7 = 325;
        let colorBez2 = "#00F3FF", widthBez2 = 4;
        TraceBez2(xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2);
        let larg = document.getElementById("canvas1").clientWidth;
        let haut = document.getElementById("canvas1").clientHeight;
        //TracePolygone(xPt1, yPt1, xPt2, yPt2, xPt3, yPt3, xPt4, yPt4, colorBez3S, widthBez3S);
        tracePt(xPt1, yPt1, "#ff0000", dimPt);
        tracePt(xPt2, yPt2, "#FC8E00", dimPt);
        tracePt(xPt3, yPt3, "#25D151", dimPt);
        tracePt(xPt4, yPt4, "#581845", dimPt);
        tracePt(xPt5,yPt5,"#F5FC0D",dimPt);
        tracePt(xPt6,yPt6,"#0000ff",dimPt);
        tracePt(xPt7,yPt7,"#FC00ED",dimPt);


        var gui = new dat.GUI();

        let menuGUI = new function () {
                this.x1 = xPt1;
                this.y1 = yPt1;
                this.x2 = xPt2;
                this.y2 = yPt2;
                this.x3 = xPt3;
                this.y3 = yPt3;
                this.x4 = xPt4;
                this.y4 = yPt4;
                this.x5=xPt5;
                this.y5=yPt5;
                this.x6=xPt6;
                this.y6=yPt6;
                this.x7=xPt7;
                this.y7=yPt7;
                this.largeurBez3 = widthBez3;
                this.couleurBez3 = colorBez3;
                this.largeurBez2=widthBez2;
                this.couleurBez2=colorBez2;
                this.affiche = true;
                this.afficheS = true;
                this.affichePt = true;
                this.dimension = dimPt;
        }
        let guiP1 = gui.addFolder("Premier Point (courbe de Bézier deg 3)");
        guiP1.add(menuGUI, "x1", 0, larg).onChange(function () {
                menuGUI.x1 = Math.floor(menuGUI.x1);
                xPt1 = menuGUI.x1;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })

        guiP1.add(menuGUI, "y1", 0, haut).onChange(function () {
                menuGUI.y1 = Math.floor(menuGUI.y1);
                yPt1 = menuGUI.y1;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })

        let guiP2 = gui.addFolder("Second Point (courbe de Bézier deg 3)");
        guiP2.add(menuGUI, "x2", 0, larg).onChange(function () {
                menuGUI.x2 = Math.floor(menuGUI.x2);
                xPt2 = menuGUI.x2;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })

        guiP2.add(menuGUI, "y2", 0, haut).onChange(function () {
                menuGUI.y2 = Math.floor(menuGUI.y2);
                yPt2 = menuGUI.y2;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })

        let guiP3 = gui.addFolder("Troisième Point (courbe de Bézier deg 3)");
        guiP3.add(menuGUI, "x3", 0, larg).onChange(function () {
                menuGUI.x3 = Math.floor(menuGUI.x3);
                xPt3 = menuGUI.x3;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })
        guiP3.add(menuGUI, "y3", 0, haut).onChange(function () {
                menuGUI.y3 = Math.floor(menuGUI.y3);
                yPt3 = menuGUI.y3;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })

        let guiP4 = gui.addFolder("Quatrième Point (courbe de Bézier deg 3)");
        guiP4.add(menuGUI, "x4", 0, larg).onChange(function () {
                menuGUI.x4 = Math.floor(menuGUI.x4);
                xPt4 = menuGUI.x4;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })
        guiP4.add(menuGUI, "y4", 0, haut).onChange(function () {
                menuGUI.y4 = Math.floor(menuGUI.y4);
                yPt4 = menuGUI.y4;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })
        let guiP5 = gui.addFolder("Premier point (courbe Bézier deg 2)");
        guiP5.add(menuGUI, "x5", 0, larg).onChange(function () {
                menuGUI.x5 = Math.floor(menuGUI.x5);
                xPt5 = menuGUI.x5;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })

        guiP5.add(menuGUI, "y5", 0, haut).onChange(function () {
                menuGUI.y5 = Math.floor(menuGUI.y5);
                yPt5 = menuGUI.y5;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })

        let guiP6 = gui.addFolder("Deuxième point (courbe Bézier deg 2)");
        guiP6.add(menuGUI, "x6", 0, larg).onChange(function () {
                menuGUI.x6 = Math.floor(menuGUI.x6);
                xPt6 = menuGUI.x6;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })

        guiP6.add(menuGUI, "y6", 0, haut).onChange(function () {
                menuGUI.y6 = Math.floor(menuGUI.y6);
                yPt6 = menuGUI.y6;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })

        let guiP7 = gui.addFolder("Troisième Point (courbe Bézier deg 2)");
        guiP7.add(menuGUI, "x7", 0, larg).onChange(function () {
                menuGUI.x7 = Math.floor(menuGUI.x7);
                xPt7 = menuGUI.x7;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })
        guiP7.add(menuGUI, "y7", 0, haut).onChange(function () {
                menuGUI.y7 = Math.floor(menuGUI.y7);
                yPt7 = menuGUI.y7;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })


        let guiAspec = gui.addFolder("Aspect des courbes");
        guiAspec.add(menuGUI, "largeurBez3", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).onChange(function () {
                widthBez3 = menuGUI.largeurBez3;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })
        guiAspec.addColor(menuGUI, 'couleurBez3').onChange(function () {
                colorBez3 = menuGUI.couleurBez3;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        });
        guiAspec.add(menuGUI, "largeurBez2", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).onChange(function () {
                widthBez2 = menuGUI.largeurBez2;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })
        guiAspec.addColor(menuGUI, 'couleurBez2').onChange(function () {
                colorBez2 = menuGUI.couleurBez2;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        });
        guiAspec.add(menuGUI, 'affiche').onChange(function () {
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        });


        let guiPoints = gui.addFolder("Aspect des points de contrôle");
        guiPoints.add(menuGUI, "dimension", [2, 4, 6, 8, 10, 12, 14, 16,18,20]).onChange(function () {
                dimPt = menuGUI.dimension;
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        })
        guiPoints.add(menuGUI, 'affichePt').onChange(function () {
                affichage(xPt1,yPt1,xPt2,yPt2,xPt3,yPt3,xPt4,yPt4,xPt5,yPt5,xPt6,yPt6,xPt7,yPt7,colorBez2,widthBez2,colorBez3,widthBez3, colorBez3S, widthBez3S, dimPt, menuGUI.affiche, menuGUI.afficheS, menuGUI.affichePt);
        });
}

//Javascript Formulaire page nousContacter
function formulaire()
{

        var myForm = document.getElementById("form1");

        var nom = document.getElementById("Nom");
        var prenom = document.getElementById("Prenom");
        var age = document.getElementById("Age");
        var profession = document.getElementById("Profession");
        var adresse = document.getElementById("Adresse");
        var ville = document.getElementById("Ville");
        var cp = document.getElementById("CP");
        var tel = document.getElementById("Tel");
        var mail = document.getElementById("mail");
        var pw = document.getElementById("password");

        var zonetexte = document.getElementById("zonetexte");

        myForm.addEventListener("submit", function (e){

                //Verification coordonnées utilisateur

                var Regex1 = /^[a-zA-Z-']{1,}$/;
                var Regex2 = /^\d{1,3}$/;
                var Regex3 = /^\d* ?[a-zA-Z-' ]{1,}$/;
                var Regex4 = /^\d{5}$/;
                var Regex5 = /^\d{2}\.?\d{2}\.?\d{2}\.?\d{2}\.?\d{2}$/;
                var Regex6 = /^[a-zA-Z-\.]+@\w+\.\w+$/;
                var Regex7 = /^$/;
                var coordonnees = false;

                if(Regex1.test(nom.value) != true){
                        e.preventDefault();
                        document.getElementById("error1").innerHTML = "Nom invalide";
                        nom.style.border = "groove red";
                }
                else{
                        document.getElementById("error1").innerHTML = "";
                        nom.style.border = "";
                }
                if(Regex1.test(prenom.value) != true){
                        e.preventDefault();
                        document.getElementById("error2").innerHTML = "Pr&eacute;nom invalide";
                        prenom.style.border = "groove red";
                }
                else{
                        document.getElementById("error2").innerHTML = "";
                        prenom.style.border = "";
                }
                if(Regex2.test(age.value) != true){
                        e.preventDefault();
                        document.getElementById("error3").innerHTML = "Age invalide";
                        age.style.border = "groove red";
                }
                else{
                        document.getElementById("error3").innerHTML = "";
                        age.style.border = "";
                }
                if(Regex1.test(profession.value) != true){
                        e.preventDefault();
                        document.getElementById("error4").innerHTML = "Profession invalide";
                        profession.style.border = "groove red";
                }
                else{
                        document.getElementById("error4").innerHTML = "";
                        profession.style.border = "";
                }
                if(Regex3.test(adresse.value) != true){
                        e.preventDefault();
                        document.getElementById("error5").innerHTML = "Adresse invalide";
                        adresse.style.border = "groove red";
                }
                else{
                        document.getElementById("error5").innerHTML = "";
                        adresse.style.border = "";
                }
                if(Regex1.test(ville.value) != true){
                        e.preventDefault();
                        document.getElementById("error6").innerHTML = "Ville invalide";
                        ville.style.border = "groove red";
                }
                else{
                        document.getElementById("error6").innerHTML = "";
                        ville.style.border = "";
                }
                if(Regex4.test(cp.value) != true){
                        e.preventDefault();
                        document.getElementById("error7").innerHTML = "Code postal invalide";
                        cp.style.border = "groove red";
                }
                else{
                        document.getElementById("error7").innerHTML = "";
                        cp.style.border = "";
                }
                if(Regex5.test(tel.value) == false) {
                        e.preventDefault();
                        document.getElementById("error8").innerHTML = "Num&eacute;ro de t&eacute;l&eacute;phone invalide";
                        tel.style.border = "groove red";
                }
                else{
                        document.getElementById("error8").innerHTML = "";
                        tel.style.border = "";
                }
                if(Regex6.test(mail.value) != true){
                        e.preventDefault();
                        document.getElementById("error9").innerHTML = "Adresse mail invalide";
                        mail.style.border = "groove red";
                }
                else{
                        document.getElementById("error9").innerHTML = "";
                        mail.style.border = "";
                }
                if(Regex7.test(pw.value) == true){
                        e.preventDefault();
                        document.getElementById("error10").innerHTML = "Code secret invalide";
                        pw.style.border = "groove red";
                }
                else{
                        document.getElementById("error10").innerHTML = "";
                        pw.style.border = "";
                }
                if(Regex1.test(nom.value) && Regex1.test(prenom.value) && Regex2.test(age.value) && Regex1.test(profession.value) && Regex3.test(adresse.value) && Regex1.test(ville.value) && Regex4.test(cp.value) && Regex5.test(tel.value) && Regex6.test(mail.value) && Regex7.test(pw.value) != true)
                        coordonnees = true;

                //Vérification cases à cocher

                var boutonradio = "radio";
                var compteur = 0;
                var coche = false;

                for(i = 1;i<8;i++) {
                        boutonradio="radio";
                        boutonradio += String(i);
                        if(document.getElementById(String(boutonradio)).checked == true)
                                compteur += 1;
                }

                if(compteur != 0) {
                        coche = true;
                        document.getElementById("error11").innerHTML = "";
                }
                else{
                        e.preventDefault();
                        coche = false;
                        document.getElementById("error11").innerHTML = "Veuillez cocher au moins une case";
                        document.getElementById("error11").style.color = "red";
                        document.getElementById("error11").style.marginLeft = "5px";
                }
                //Vérification zone de texte remplie

                var demande = true;

                if(zonetexte.value.trim() == "") {
                        e.preventDefault();
                        demande = false;
                        document.getElementById("erreur12").innerHTML = "Veuillez compléter ce champ"
                }
                else{
                        document.getElementById("erreur12").innerHTML = "";
                        demande = true;
                }

                //Envoi final
                if(demande && coordonnees && coche)
                        alert("Formulaire envoyé");
        })
}