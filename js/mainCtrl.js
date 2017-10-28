angular.module('mainApp', [])
    .controller('mainCtrl', function ($scope) {

        $scope.cardsArray = [

            //COSTRUZIONI & DESIGN
            {

                title: 'Costruzioni & Design',
                icon: 'fa fa-building',
                linkUrl: 'pages/costruzioni-design.html'

            },

            //IMPIANTI & AMBIENTE
            {

                title: 'Impianti & Ambiente',
                icon: 'fa fa-envira',
                linkUrl: 'pages/impianti-ambiente.html'

            },

            //ESTIMO & CONSULENZE
            {

                title: 'Estimo & Consulenze',
                icon: 'fa fa-area-chart',
                linkUrl: 'pages/estimo-consulenze.html'

            },

            //PORTFOLIO
            {

                title: 'Portfolio',
                icon: 'fa fa-folder',
                linkUrl: 'portfolio/page/portfolio.html'

            }];

    });