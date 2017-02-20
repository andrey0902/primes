window.addEventListener('load', function () {

    function createArray(num){
        var i, j,
            defaultArray = [];

        defaultArray[1] = 0;

        for( i = 1; i <= num; i++){
            defaultArray[i] = 1;
        }
        for( i = 2; i *  i  <= num; i++){

            if(defaultArray[i] == 1){

                for( j = i * i; j <= num; j+= i){
                    defaultArray[j] = 0;
                }
            }
        }
        return defaultArray;

    }

    function clearArray (array) {
        var newArray = [];

        array.forEach(function (item, i) {

            if (item == 1){
                newArray.push(i)
            }
        });
        return newArray;
    }

    function showInDocumetn(element) {

        element.forEach(function (item, i) {
            document.write (item + ', ');
        });

    }
    
    showInDocumetn(clearArray(createArray(500000)));

});