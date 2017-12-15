angular.module('mainApp', [])
    .directive("navMenu", function() {
        return {
            restrict: "E",
            templateUrl: "component/nav-menu-view.html"
        };
    })
    .controller('mainCtrl', function ($scope) {

        $scope.folderImage = [

            //PRIMA CARTELLA DI IMMAGINI
            {
                backgroundImg: 'assets/img/fancybox/pretty-1-th.jpg',
                caption:'Lavoro 1',
                boxLinkImg:['assets/img/fancybox/pretty-2.jpg',
                    'assets/img/fancybox/pretty-3-th.jpg','assets/img/pencil-1.jpg'],
                boxLight:'cartella-1',
            },

            //SECONDA CARTELLA DI IMMAGINI
            {
                backgroundImg: 'assets/img/fancybox/pretty-2-th.jpg',
                caption:'Lavoro 2',
                boxLinkImg:['assets/img/pencil-1.jpg','assets/img/pencil-2.jpg'],
                boxLight:'cartella-2',
            },

            //TERZA CARTELLA DI IMMAGINI
            {
                backgroundImg: 'assets/img/fancybox/pretty-4-th.jpg',
                caption:'Lavoro 3',
                boxLinkImg:['assets/img/pencil-3.jpg','assets/img/flexslider/flex-1.jpg','assets/img/pencil-1.jpg'],
                boxLight:'cartella-3',
            },
        ];


        $scope.stepArray = [

            //PRIMA FASE
            {
                icon: 'fa-handshake-o',
                number: 'Prima Fase',
                title: 'In Studio',
                description: ['Incontro conoscitivo',
                    'Informazioni preliminari']},

            //SECONDA FASE
            {
                icon: 'fa-map-marker',
                number: 'Seconda Fase',
                title: 'Sul Posto',
                description: ['Sopralluogo sul posto',
                    'Rilievo architettonico']},

            //TERZA FASE
            {
                icon: 'fa-magic',
                number: 'Terza Fase',
                title: 'Fase Creativa',
                description: ['Progettazione architettonica',
                    'Redazione elaborati progettuali']},

            //QUARTA FASE
            {
                icon: 'fa-file-text',
                number: 'Quarta Fase',
                title: 'Iter Burocratico',
                description: ['Autorizzazioni',
                    'Richieste preventivi']},

            //QUINTA FASE
            {
                icon: 'fa-hand-o-right',
                number: 'Quinta Fase',
                title: 'Consegna',
                description: ['Direzione lavori',
                    'Conclusioni lavori']}



        ];


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

        $scope.menuItem = {

            //HOME
            home:

                {
                    title: 'Home',
                    icon: null,
                    linkUrl: 'index.html'
                },

            //CHI SIAMO
            chisiamo:
                {
                    title: 'Chi siamo',
                    icon: null,
                    linkUrl: 'chi-siamo.html'
                },

            //PORTFOLIO
            portfolio:
                {
                    title: 'Portfolio',
                    icon: null,
                    linkUrl: 'portfolio.html'
                },

            costruzioni:

            //COSTRUZIONI-DESIGN
                {
                    title: 'Costruzioni & Design',
                    icon: 'fa fa-building',
                    linkUrl: 'costruzioni-design.html'
                },

            estimo:

            //ESTIMO-CONSULENZE
                {
                    title: 'Estimo & Consulenze',
                    icon: 'fa fa-area-chart',
                    linkUrl: 'costruzioni-design.html'
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
                    icon: null,
                    linkUrl: 'lavora-con-noi.html'
                },

            contatti:

            //CONTATTI
                {
                    title: 'Contatti',
                    icon: null,
                    linkUrl: 'contatti.html'
                }
        }
        ;

    });