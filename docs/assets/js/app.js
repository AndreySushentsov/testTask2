
$('.goods--scroll').on('click',function(e) {
  e.preventDefault()
  $('html, body').animate({scrollTop:0},500);
});

$('.footer--button').on('click',function(e) {
  e.preventDefault();
  let regexp = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i
  let data = $('input[name="email"]').val();
  if(data.match(regexp)){
    alert('Вы успешно зарегистрировались.');
  }else {
    alert('введите корректный email');
  }
});

// выводит отсортированный массив в консоль
$('#date').on('click',function() {
  let x = [4,2,7,3,5,9,1];
  function bubble(arr) {
      var len = arr.length;
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){
        if (arr[j] > arr[j + 1]) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
  console.log(bubble(x));
});

// выводит отсортированный в обратном порядке массив
$('#completed').on('click',function() {
  let x = [4,2,7,3,5,9,1];
  function bubble(arr) {
      let len = arr.length;
      for (let i = 0; i < len ; i++) {
        for(let j = 0 ; j < len - i - 1; j++){
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      arr.reverse();
      return arr;
    }
  console.log(bubble(x));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiQoJy5nb29kcy0tc2Nyb2xsJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDowfSw1MDApO1xyXG59KTtcclxuXHJcbiQoJy5mb290ZXItLWJ1dHRvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgcmVnZXhwID0gL15bLS5fYS16MC05XStAKD86W2EtejAtOV1bLWEtejAtOV0rXFwuKStbYS16XXsyLDZ9JC9pXHJcbiAgbGV0IGRhdGEgPSAkKCdpbnB1dFtuYW1lPVwiZW1haWxcIl0nKS52YWwoKTtcclxuICBpZihkYXRhLm1hdGNoKHJlZ2V4cCkpe1xyXG4gICAgYWxlcnQoJ9CS0Ysg0YPRgdC/0LXRiNC90L4g0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC70LjRgdGMLicpO1xyXG4gIH1lbHNlIHtcclxuICAgIGFsZXJ0KCfQstCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSBlbWFpbCcpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyDQstGL0LLQvtC00LjRgiDQvtGC0YHQvtGA0YLQuNGA0L7QstCw0L3QvdGL0Lkg0LzQsNGB0YHQuNCyINCyINC60L7QvdGB0L7Qu9GMXHJcbiQoJyNkYXRlJykub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcclxuICBsZXQgeCA9IFs0LDIsNywzLDUsOSwxXTtcclxuICBmdW5jdGlvbiBidWJibGUoYXJyKSB7XHJcbiAgICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbiA7IGkrKykge1xyXG4gICAgICAgIGZvcih2YXIgaiA9IDAgOyBqIDwgbGVuIC0gaSAtIDE7IGorKyl7XHJcbiAgICAgICAgaWYgKGFycltqXSA+IGFycltqICsgMV0pIHtcclxuICAgICAgICAgIC8vIHN3YXBcclxuICAgICAgICAgIHZhciB0ZW1wID0gYXJyW2pdO1xyXG4gICAgICAgICAgYXJyW2pdID0gYXJyW2orMV07XHJcbiAgICAgICAgICBhcnJbaiArIDFdID0gdGVtcDtcclxuICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuICBjb25zb2xlLmxvZyhidWJibGUoeCkpO1xyXG59KTtcclxuXHJcbi8vINCy0YvQstC+0LTQuNGCINC+0YLRgdC+0YDRgtC40YDQvtCy0LDQvdC90YvQuSDQsiDQvtCx0YDQsNGC0L3QvtC8INC/0L7RgNGP0LTQutC1INC80LDRgdGB0LjQslxyXG4kKCcjY29tcGxldGVkJykub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcclxuICBsZXQgeCA9IFs0LDIsNywzLDUsOSwxXTtcclxuICBmdW5jdGlvbiBidWJibGUoYXJyKSB7XHJcbiAgICAgIGxldCBsZW4gPSBhcnIubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbiA7IGkrKykge1xyXG4gICAgICAgIGZvcihsZXQgaiA9IDAgOyBqIDwgbGVuIC0gaSAtIDE7IGorKyl7XHJcbiAgICAgICAgaWYgKGFycltqXSA+IGFycltqICsgMV0pIHtcclxuICAgICAgICAgIGxldCB0ZW1wID0gYXJyW2pdO1xyXG4gICAgICAgICAgYXJyW2pdID0gYXJyW2orMV07XHJcbiAgICAgICAgICBhcnJbaiArIDFdID0gdGVtcDtcclxuICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXJyLnJldmVyc2UoKTtcclxuICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuICBjb25zb2xlLmxvZyhidWJibGUoeCkpO1xyXG59KTtcclxuIl19
