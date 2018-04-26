// 普通
const details = request.POST.get('details');
const location = request.POST.get('location');
const phone = request.POST.get('phone');
const email = request.POST.get('email');
const url = request.POST.get('url');

/*******************
 改善例
********************/
// 縦の線を合わせる
// 並び順にも意味をもたせるとなお良い（アルファベット順でもよい）
const details  = request.POST.get('details');
const email    = request.POST.get('email');
const location = request.POST.get('location');
const phone    = request.POST.get('phone');
const url      = request.POST.get('url');
