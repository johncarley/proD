var app = angular.module('mainApp', ['matchMedia']);


//PAGINE SERVIZI
app.directive("costruzioniDesktop", function () {
    return {
        restrict: "E",
        templateUrl: "component/servizi/costruzioni-design/costruzioni-design-desktop.html"
    };
})
app.directive("costruzioniSmartphone", function () {
    return {
        restrict: "E",
        templateUrl: "component/servizi/costruzioni-design/costruzioni-design-smartphone.html"
    };
})
app.directive("impiantiDesktop", function () {
    return {
        restrict: "E",
        templateUrl: "component/servizi/impianti-ambiente/impianti-ambiente-desktop.html"
    };
})
app.directive("impiantiSmartphone", function () {
    return {
        restrict: "E",
        templateUrl: "component/servizi/impianti-ambiente/impianti-ambiente-mobile.html"
    };
})
app.directive("estimoDesktop", function () {
    return {
        restrict: "E",
        templateUrl: "component/servizi/estimo-consulenze/estimo-consulenze-desktop.html"
    };
})
app.directive("estimoSmartphone", function () {
    return {
        restrict: "E",
        templateUrl: "component/servizi/estimo-consulenze/estimo-consulenze-mobile.html"
    };
});

//MAIN PAGES
app.directive("homeDesktopTemplate", function () {
    return {
        restrict: "E",
        templateUrl: "component/home/home-desktop.html"
    };
});
app.directive("homeSmartphoneTemplate", function () {
    return {
        restrict: "E",
        templateUrl: "component/home/home-smartphone.html"
    };
});
app.directive("portfolioDesktop", function () {
    return {
        restrict: "E",
        templateUrl: "component/portfolio/portfolio-desktop.html"
    };
});
app.directive("portfolioSmartphone", function () {
    return {
        restrict: "E",
        templateUrl: "component/portfolio/portfolio-smartphone.html"
    };
});
app.directive("chiSiamoDesktop", function () {
    return {
        restrict: "E",
        templateUrl: "component/chi-siamo/chi-siamo-desktop.html"
    };
});
app.directive("chiSiamoSmartphone", function () {
    return {
        restrict: "E",
        templateUrl: "component/chi-siamo/chi-siamo-smartphone.html"
    };
});
app.directive("contattiDesktop", function () {
    return {
        restrict: "E",
        templateUrl: "component/contatti/contatti-desktop.html"
    };
});
app.directive("contattiSmartphone", function () {
    return {
        restrict: "E",
        templateUrl: "component/contatti/contatti-smartphone.html"
    };
});
app.directive("lavoraConNoiDesktop", function () {
    return {
        restrict: "E",
        templateUrl: "component/lavora-con-noi/lavora-con-noi-desktop.html"
    };
});
app.directive("lavoraConNoiSmartphone", function () {
    return {
        restrict: "E",
        templateUrl: "component/lavora-con-noi/lavora-con-noi-smartphone.html"
    };
});

//WIDGET
app.directive("navMenu", function () {
    return {
        restrict: "E",
        templateUrl: "component/nav-menu-view.html"
    };
});
app.directive("contactHeader", function () {
    return {
        restrict: "E",
        templateUrl: "component/widget/contact.html"
    };
});
app.directive("headerDesktop", function () {
    return {
        restrict: "E",
        templateUrl: "component/header/header-desktop.html"
    };
});
app.directive("headerSmartphone", function () {
    return {
        restrict: "E",
        templateUrl: "component/header/header-smartphone.html",
        link: function (scope, element, attrs) {
            scope.name = attrs['title'];
            scope.icon = attrs['icon'];
        }
    };
});

app.controller('mainCtrl', ['$scope', 'screenSize', function ($scope, screenSize) {


    //APPENA VIENE APERTA LA PAGINA CONTROLLO SE è UN PC/ SMARTPHONE
    if (screenSize.is('xs, sm')) {
        console.log("PRIMA VOLTA CELL");
    } else {
        console.log("PRIMA VOLTA PC");
    }

    $scope.isServicePressed = false;

    $scope.serviceDropdown = function () {

        $scope.isServicePressed = !$scope.isServicePressed;
    };

    $scope.isMenuOpened = false;

    $scope.openMenu = function () {

        $scope.isMenuOpened = !$scope.isMenuOpened;
        $scope.isServicePressed = false;
    };

    //LISTENER SUL CAMBIO DELLA DIMENSIONE DELLA PAGINA
    $scope.isMobile = screenSize.on('xs, sm', function (isMatch) {
        $scope.isMobile = isMatch;
        console.log("CAMBIO" + isMatch);
    });

    //ARRAY IMMAGINI USATO IN PORTFOLIO
    $scope.folderImage = [

        //PRIMA CARTELLA DI IMMAGINI
        {
            backgroundImg: 'assets/img/fancybox/pretty-1-th.jpg',
            caption: 'Lavoro 1',
            boxLinkImg: ['assets/img/fancybox/pretty-2.jpg',
                'assets/img/fancybox/pretty-3-th.jpg', 'assets/img/pencil-1.jpg'],
            dataLightBox: 'cartella-1',
        },

        //SECONDA CARTELLA DI IMMAGINI
        {
            backgroundImg: 'assets/img/fancybox/pretty-2-th.jpg',
            caption: 'Lavoro 2',
            boxLinkImg: ['assets/img/pencil-1.jpg', 'assets/img/pencil-2.jpg'],
            dataLightBox: 'cartella-2',
        },

        //TERZA CARTELLA DI IMMAGINI
        {
            backgroundImg: 'assets/img/fancybox/pretty-4-th.jpg',
            caption: 'Lavoro 3',
            boxLinkImg: ['assets/img/pencil-3.jpg', 'assets/img/flexslider/flex-1.jpg', 'assets/img/pencil-1.jpg'],
            dataLightBox: 'cartella-3',
        }
    ];

    //ARRAY DEGLI STEP IN CHI-SIAMO
    $scope.stepArray = [

        //PRIMA FASE
        {
            icon: 'fa-handshake-o',
            number: 'Prima Fase',
            title: 'In Studio',
            description: ['Incontro conoscitivo',
                'Informazioni preliminari']
        },

        //SECONDA FASE
        {
            icon: 'fa-map-marker',
            number: 'Seconda Fase',
            title: 'Sul Posto',
            description: ['Sopralluogo sul posto',
                'Rilievo architettonico']
        },

        //TERZA FASE
        {
            icon: 'fa-magic',
            number: 'Terza Fase',
            title: 'Fase Creativa',
            description: ['Progettazione architettonica',
                'Redazione elaborati progettuali']
        },

        //QUARTA FASE
        {
            icon: 'fa-file-text',
            number: 'Quarta Fase',
            title: 'Iter Burocratico',
            description: ['Autorizzazioni',
                'Richieste preventivi']
        },

        //QUINTA FASE
        {
            icon: 'fa-hand-o-right',
            number: 'Quinta Fase',
            title: 'Consegna',
            description: ['Direzione lavori',
                'Conclusioni lavori']
        }


    ];

    //ARRAY CARD HOME
    $scope.cardsArray = [

        //COSTRUZIONI & DESIGN
        {

            title: 'Costruzioni & Design',
            icon: 'fa fa-building',
            linkUrl: 'costruzioni-design.html'

        },

        //IMPIANTI & AMBIENTE
        {

            title: 'Impianti & Ambiente',
            icon: 'fa fa-envira',
            linkUrl: 'impianti-ambiente.html'

        },

        //ESTIMO & CONSULENZE
        {

            title: 'Estimo & Consulenze',
            icon: 'fa fa-area-chart',
            linkUrl: 'estimo-consulenze.html'

        },

        //PORTFOLIO
        {

            title: 'Portfolio',
            icon: 'fa fa-folder',
            linkUrl: 'portfolio.html'

        }];

    //ARRAY USATO NEL MENU
    $scope.menuItem = {

        //HOME
        home:

            {
                title: 'Home',
                icon: 'fa-home',
                linkUrl: 'index.html'
            },

        //CHI SIAMO
        chisiamo:
            {
                title: 'Chi siamo',
                icon: 'fa-users',
                linkUrl: 'chi-siamo.html'
            },

        //PORTFOLIO
        portfolio:
            {
                title: 'Portfolio',
                icon: 'fa-folder',
                linkUrl: 'portfolio.html'
            },

        costruzioni:

        //COSTRUZIONI-DESIGN
            {
                title: 'Costruzioni & Design',
                icon: 'fa fa-building-o',
                linkUrl: 'costruzioni-design.html'
            },

        estimo:

        //ESTIMO-CONSULENZE
            {
                title: 'Estimo & Consulenze',
                icon: 'fa fa-area-chart',
                linkUrl: 'estimo-consulenze.html'
            },

        impianti:

        //IMPIANTI-AMIBIENTE
            {
                title: 'Impianti & Ambiente',
                icon: 'fa fa-envira',
                linkUrl: 'impianti-ambiente.html'
            },
        lavoracon:

        //LAVORA CON NOI
            {
                title: 'Lavora con noi',
                icon: 'fa-handshake-o',
                linkUrl: 'lavora-con-noi.html'
            },

        contatti:

        //CONTATTI
            {
                title: 'Contatti',
                icon: 'fa-address-book-o',
                linkUrl: 'contatti.html'
            }
    };

}]);

