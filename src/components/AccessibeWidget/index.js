import React, {useEffect} from "react";

export default function AccessibeWidget () {
  useEffect(() => {
    if (window) {
      const s    = document.createElement('script');
      const h    = document.querySelector('head') || document.body;
      s.src    = 'https://acsbapp.com/apps/app/dist/js/app.js';
      s.async  = true;
      s.onload = function(){
        acsbJS.init({
          statementLink    : '',
          footerHtml       : '',
          hideMobile       : false,
          hideTrigger      : false,
          disableBgProcess : false,
          language         : 'en',
          position         : 'left',
          leadColor        : '#000000',
          triggerColor     : '#000000',
          triggerRadius    : '50%',
          triggerPositionX : 'right',
          triggerPositionY : 'bottom',
          triggerIcon      : 'people',
          triggerSize      : 'medium',
          triggerOffsetX   : 20,
          triggerOffsetY   : 20,
          mobile           : {
            triggerSize      : 'small',
            triggerPositionX : 'right',
            triggerPositionY : 'bottom',
            triggerOffsetX   : 10,
            triggerOffsetY   : 10,
            triggerRadius    : '50%'
          }
        });
      };
      h.appendChild(s);
    }
  }, [])
  return <></>
}