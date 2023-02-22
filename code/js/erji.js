

function main() {
    var html = getResCode()
    var d = [];
    let title = xpath(html, "//*[@id=\"book\"]/div[1]/h1/text()")
    let description = xpath(html, "//*[@id=\"book\"]/div[1]/p[4]/text()")
    let pic = xpath(html, "//*[@id=\"book\"]/div[1]/p[1]/img/@src")
    var url = xpathArray(html, "//*[@class=\"cell-title\"]/text()");
    let a = [];
    a.push({
        title: "‘‘’’<b><small><font color=\"#b0e0e6\">片名" + title + "</font></small></b>",
        desc: "‘‘’’<b><small><b><font color=\"#708090\">" + title + "</font></b><font color=\"#778899\">" + description + "</font></small></b>",
        url: "pic",
        pic_url: pic,
        col_type: "movie_1_vertical_pic_blur"
    })
    a.push({
        title: "线路",
        desc: "",
        url: "",
        pic_url: version.icon + "67.png",
        col_type: "icon_small_3",
    })
    a.push({
        title: "剧情",
        desc: "",
        url: $("hiker://empty#noRecordHistory##noHistory#").rule((description) => {
            setResult([{title: description, col_type: "long_text"}]);
        }, description),
        pic_url: version.icon + "10.png",
        col_type: "icon_small_3",
        extra: {"inheritTitle": false}//不继承标题
    })
    a.push({
        title: "搜索",
        desc: "",
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(version.localhost + "method.js");
            sousuo();
        }),
        pic_url: version.icon + "195.png",
        col_type: "icon_small_3",
    })
    for (let i in url) {
        a.push({
            title: "第" + (i + 1) + "话",
            url: $(url).lazyRule((url) => {
                require(version.localhost + "js/erji.js");
                eval(url)
                return sanji(input)
            },(url[i])), col_type: 'text_4',
        })
    }
    setResult(d);
}
function openMH(bookid, linkid, path) {
    var localhost = 'https://www.mhdnf.xyz'
    eval(getCryptoJS());
    const j = CryptoJS.enc.Utf8.parse('12cdefgabcdefg12');
    let j1 = CryptoJS.enc.Utf8.parse(linkid);
    let jg = CryptoJS.AES.encrypt(j1, j, {
        'mode': CryptoJS.mode.ECB, 'padding': CryptoJS.pad.Pkcs7
    });
    let url = localhost + '/play?linkId=' + linkid + '&bookId=' + bookid + "&path=" + path + '&key=' + jg.toString()
    var html = fetch(url)
    var xx = xpathArray(html, "//*[@id=\"imgList\"]/img/@src");
    var BT = xpathArray(html, "//*[@id=\"imgList\"]/img/@data-original");
    var ll = "pics://"
    for (var i = 0; i < 3; i++) {
        ll = ll + xx[i] + '&&'
    }
    for (var i = 0; i < BT.length; i++) {
        if (i == BT.length - 1) {
            ll = ll + BT[i]
        } else {
            ll = ll + BT[i] + '&&'
        }
    }
    return ll
}