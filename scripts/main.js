window.onload = function () {

    var date = new Date();
    document.getElementById("copyright").innerHTML = "&copy; Fábio Vitor | Todos os direitos reservados "+date.getFullYear()+".";

    setTimeout(function() {

        var _fabio_vitor_ = [
            'ease-out-back',
            'bottom-bottom',
            'init'
        ];
        (function (_var_01_, _var_02_) {
            var _var_03_ = function (_var_04_) {
                while (--_var_04_) {
                    _var_01_['push'](_var_01_['shift']());
                }
            };
            _var_03_(++_var_02_);
        }(_fabio_vitor_, 0x6b));
        var _var_05_ = function (_var_01_, _var_02_) {
            _var_01_ = _var_01_ - 0x0;
            var _var_03_ = _fabio_vitor_[_var_01_];
            return _var_03_;
        };
        AOS[_var_05_('0x0')]({
            'easing': _var_05_('0x1'),
            'duration': 0x4b0,
            'delay': 0x64,
            'mirror': !![],
            'anchorPlacement': _var_05_('0x2'),
            'offset': 0xa0
        });

}, 100);


};

function sendMail() {
  var link = "mailto: fabvitor2010@gmail.com" + "?cc=" + "teste@hotmail.com" + "&subject=" + escape("Contato do Site") + "&body=" + "texto";
  window.location.href = link;
}

/*setTimeout(function(){ function pageScroll() {
  // window.setTimeout(3000);

  window.scrollBy(0, 1);
  scrolldelay = setTimeout(pageScroll, 4);
}
pageScroll(); }, 3500);
*/

function redirect (url) {

    setTimeout(function () {
        window.open(url,'_blank');
    },600);

}
