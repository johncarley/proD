angular.module('mainApp', [])
    .directive("navMenu", function() {
        return {
            restrict: "E",
            templateUrl: "component/nav-menu-view.html"
        };
    })
    .controller('mainCtrl', function ($scope) {

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