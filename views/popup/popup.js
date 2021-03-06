

(function(){

const params = new URLSearchParams(window.location.search);
const centered = params.get('centered');
const view = params.get('view');

if (centered && location.protocol == 'ms-browser-extension:') {
  var x = Number(params.get('offsetX'));
  var y = Number(params.get('offsetY'));
  moveTo(x, y);
}

const viewSetup = {
  async picker (){

    window.addEventListener('blur', e => {
      //window.close()
    });

    picker_list.addEventListener('submit', e => {
      e.preventDefault();
      e.cancelBubble = true;
      var pick = e.target.querySelector('input:checked');
      if (pick) {
        EXT.fireEvent('pick-did', pick.value);
        window.close()
      }
    });

    var content = '';
    await DIDManager.forEach(did => {
      content += `<label><input type="radio" name="did" value="${did.id}" /><span></span><div><svg data-jdenticon-value="${did.id}"><svg/></div><span>${did.meta.display_name || did.id}</span></label>`;
    });
    picker_list.innerHTML = content;
    jdenticon.update('#picker_list [data-jdenticon-value]');
  }
};


if (view) {
  views.view = view;
  console.log(view);
  var setup = viewSetup[view];
  if (setup) {
    try {
      setup();
    }
    catch(e) { console.log(e) }
  }
}
else {
  //console.log();
  // browser.extension.getURL('views/profile/profile.html?url=') + msg.url
}


})()