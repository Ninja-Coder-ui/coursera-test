# coursera-test
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
</head>

<body>
    <div class="nav-bar">
        <p class="food">Food LLC</p>
        <div class="menu-right">
            <span onClick="myFunction()">&#9776;</span>
            <ul id="menu">
                <li>
                    <a href="index.html">Chicken</a>
                </li>
                <li>
                    <a href="beef.html">Beef</a>
                </li>
                <li>
                    <a href="sushi.html">Sushi</a></li>

            </ul>
        </div>


    </div>

    <script>
        function myFunction() {
            var x = document.getElementById("menu");

            if (x.style.display == "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }
    </script>
    <h1>Our Menu</h1>
    <div class="row">
        <section class="col-desktop-A col-tablet-A col-mobile-A">
            <h3 id="Chicken">Chicken</h3>
            <p>
                The chicken (Gallus gallus domesticus) is a domesticated junglefowl species, with attributes of wild species such as the grey and the Ceylon junglefowl[1] that are originally from Southeastern Asia. Rooster or cock is a term for an adult male bird, and
                a younger male may be called a cockerel. A male that has been castrated is a capon. An adult female bird is called a hen and a sexually immature female is called a pullet. Humans now keep chickens primarily as a source of food (consuming
                both their meat and eggs) and as pets. Traditionally they were also bred for cockfighting, which is still practiced in some places. Chickens are one of the most common and widespread domestic animals, with a total population of 23.7 billion
                as of 2018,[2] up from more than 19 billion in 2011. There are more chickens in the world than any other bird. There are numerous cultural references to chickens – in myth, folklore and religion, and in language and literature. Iorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </section>
    </div>
</body>

</html>
