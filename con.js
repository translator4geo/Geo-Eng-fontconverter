let albpabet2 = {
        ა: 'a',
        ბ: 'b',
        გ: 'g',
        დ: 'd',
        ე: 'e',
        ვ: 'v',
        ზ: 'z',
        თ: 'T',
        ი: 'i',
        კ: 'k',
        ლ: 'l',
        მ: 'm',
        ნ: 'n',
        ო: 'o',
        პ: 'p',
        რ: 'r',
        ს: 's',
        ტ: 't',
        უ: 'u',
        ფ: 'f',
        ქ: 'q',
        ღ: 'R',
        ყ: 'y',
        შ: 'S',
        ჩ: 'C',
        ც: 'c',
        ძ: 'Z',
        წ: 'w',
        ჭ: 'W',
        ხ: 'x',
        ჯ: 'j',
        ჰ: 'h',
        '!': '!',
        '?': '?',
        ',': ',',
        '.': '.',
        ' ': ' ',
      };
      function convertToEng() {
        var output = '';
        var inputValue = document.getElementById('geoinput').value;
        for (var i = 0; i < inputValue.length; i++) {
          output += albpabet2[inputValue[i]];
        }
        document.getElementById('engout').innerHTML = output;
      }
<script>
      let albpabet1 = {
        a: 'ა',
        b: 'ბ',
        c: 'ც',
        d: 'დ',
        e: 'ე',
        f: 'ფ',
        g: 'გ',
        h: 'ჰ',
        i: 'ი',
        j: 'ჯ',
        k: 'კ',
        l: 'ლ',
        m: 'მ',
        n: 'ნ',
        o: 'ო',
        p: 'პ',
        q: 'ქ',
        r: 'რ',
        s: 'ს',
        t: 'ტ',
        u: 'უ',
        v: 'ვ',
        w: 'წ',
        x: 'ხ',
        y: 'ყ',
        z: 'ზ',
        S: 'შ',
        C: 'ჩ',
        W: 'ჭ',
        R: 'ღ',
        T: 'თ',
        Z: 'ძ',
        '!': '!',
        '?': '?',
        ',': ',',
        '.': '.',
        ' ': ' ',
      };
      function convertToGeo() {
        var output = '';
        var inputValue = document.getElementById('eninput').value;
        for (var i = 0; i < inputValue.length; i++) {
          {
            if ((inputValue[i] = undefined)) {
              output += ' ';
            }
          }
          output += albpabet1[inputValue[i]];
        }
        document.getElementById('geoout').innerHTML = output;
      }
