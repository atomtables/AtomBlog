export function setCookies(cookies, setter) {
    cookies.forEach(cookieStr => {
        const cookieParts = cookieStr.split(';').map(part => part.trim());
        const cookie = {};
        let first = true
        let cookieName = ""
        let cookieValue = ""
        cookieParts.forEach(part => {
            const [key, value] = part.split('=');
            cookie[key] = value || true; // If there's no value, set it to true
            if (first) {
                cookieName = key
                cookieValue = value
            }
            first = false
        });

        const {expires, MaxAge, Path, SameSite, HttpOnly, Secure} = cookie;
        const cookieOptions = {};

        if (expires) {
            cookieOptions.expires = new Date(expires);
        }

        if (MaxAge) {
            cookieOptions.maxAge = parseInt(MaxAge);
        }

        if (Path) {
            cookieOptions.path = Path;
        }

        if (SameSite) {
            cookieOptions.sameSite = SameSite;
        }

        if (HttpOnly) {
            cookieOptions.httpOnly = true;
        }

        if (Secure) {
            cookieOptions.secure = true;
        }
        setter.set(cookieName, cookieValue, cookieOptions);
    });
}

export function getCookies(cookies) {
    let values = {}
    cookies = cookies.trim().split(';')
    for (let cookie of cookies) {
        cookie = cookie.trim().split('=')
        values[cookie[0].trim()] = cookie[1].trim()
    }
    return values
}

export let events = {
    preventDefault: function(e) {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
    },

    //spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36,
    //left: 37, up: 38, right: 39, down: 40
    keys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
    keydown: function(e) {
        for (var i = events.keys.length; i--;) {
            if (e.keyCode === events.keys[i]) {
                events.preventDefault(e);
                return;
            }
        }
    },

    wheel: function(e) {
        events.preventDefault(e);
    },

    disable: function() {
        if (window.addEventListener) {
            window.addEventListener('DOMMouseScroll', events.wheel, { passive: false });
        }
        window.onmousewheel = document.onmousewheel = events.wheel;
        document.onkeydown = this.keydown;
    },

    enable: function() {
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', events.wheel, { passive: false });
        }
        window.onmousewheel = document.onmousewheel = document.onkeydown = null;
    }
}