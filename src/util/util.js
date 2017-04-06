var toast;

function showToast(message, time) {
    if (!message) {
        return;
    }
    if (isNaN(time)) {
        time = 2000;
    }
    if (toast !== undefined && message !== toast.message) {
        //  toast.remove();
        $(".toast span").text(message);
    }
    toast = new Toast(message, time);
    toast.show();
}

function Toast(message, time) {
    this.message = message;
    this.time = time;
    this.init();
}
Toast.prototype.remove = function() {
        if ($('.toast')[0]) {
            $('.toast').remove();
        }
    },
    Toast.prototype.init = function() {
        if ($('.toast')[0]) {
            return;
        }
        let container = document.body;
        let styles = new Array("<div class='toast'><span>", this.message, "</span></div>");
        $(container).append(styles.toString().replace(new RegExp(/,/g), ''));
        $('.toast').hide();
    },
    Toast.prototype.show = function() {
        $('.toast').fadeIn(this.time / 2);
        $('.toast').fadeOut(this.time / 2);
    }

function scroll(callback) {
    let windowHeight = document.body.clientHeight;
    $(document).scroll(() => {
        if (($(document).height() - $(document).scrollTop() - windowHeight) < 30) {
            callback();
        }
    });
}

function removeScroll() {
    $(document).unbind("scroll");
}

//判断是否为空
function isEmpty(val) {
    if (val !== null&&"undefined" !==  typeof val) {
        if (val.trim()) {
            return false;
        }
        return true;
    } else {
        return true;
    }
}
//判断用户名 密码是否是正确格式
function check(username, password) {
    if (isEmpty(username)) {
        return "请输入用户名";
    }
    if (isEmpty(password)) {
        return "请输入密码";
    }
    if (password.trim().length < 6) {
        return "密码必须大于等于6位数";
    }
    return;
}
export default {
    showToast: showToast,
    scroll: scroll,
    removeScroll: removeScroll,
    check: check,
    isEmpty:isEmpty
}
