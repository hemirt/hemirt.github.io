const footerList = document.getElementsByTagName("footer")
for (const footer of footerList) {
    footer.innerHTML = 
`
<a href="/donolist.html">Dono List</a>
<a href="/coins.html">Coins</a>
<a href="/">Donate Here</a>

`
}