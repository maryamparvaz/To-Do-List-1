        // click for footer
        let i = 1
        let x = document.getElementById('foot')
        let p = document.getElementById('but')
        let o = document.querySelectorAll('#box ul')
        let u = p.previousElementSibling
        let po = document.querySelectorAll('#_ul li')
        x.addEventListener('click', () => {
                let z = x.children
                if (i % 2) {
                        z[0].style.top = '-50%'
                        z[1].style.top = '50%'
                } else {
                        let w = z[1].children
                        w[2].addEventListener('click', () => {
                                z[0].style.top = '50%'
                                z[1].style.top = '-50%'
                        })

                }
                i++

        })
        // click for tabs
        function tabs(e) {
                let x = e.innerText
                let z = e.parentElement.nextElementSibling.children
                o.forEach(val => {
                        val.style.top = '-1000%'
                });
                po.forEach(elem => {
                        elem.style.borderBottom = '0px'
                })
                if (x == 'ALL') {
                        z[0].style.top = '0'
                        e.style.borderBottom = '5px solid gray'
                } else if (x == 'PENDING') {
                        z[1].style.top = '0'
                        e.style.borderBottom = '5px solid gray'
                } else {
                        z[2].style.top = '0'
                        e.style.borderBottom = '5px solid gray'
                }

        }
        // click for creat li
        p.addEventListener('click', () => {
                // page one

                let _li = document.createElement('li')
                let _li2 = document.createElement('li')
                if ((u.value.length) > 3) {
                        _li.innerHTML = `<h3 class = 'w-full flex justify-between border-b-2 border-black'><strong class='w-[60%] md:w-[80%]'>${u.value}</strong><div><i onclick='clear_line(this)' class="bi bi-trash mr-3 cursor-pointer hover:text-pink-700 text-[25px]"></i><i onclick ='edit(this)' class="bi bi-pencil cursor-pointer hover:text-pink-700 text-[25px]"></i></div></h3>`
                        _li2.innerHTML = `<h3  class = 'w-full flex justify-between border-b-2 border-black'><strong class='w-[80%]'>${u.value}</strong><button onclick='_clear(this)'  class = 'text-[20px] hover:scale-[1.2] hover:text-pink-700'>Done?</button></h3>`
                        _li.classList.add('__li')
                        _li2.classList.add('__li')
                        let l = document.getElementById('one')
                        let k = document.getElementById('two')
                        l.appendChild(_li)
                        k.appendChild(_li2)
                        u.value = null
                        u.focus()


                } else {
                        alert('write somthing more')
                }
                // page two


        })// click for done
        function _clear(w) {
                let _li = document.createElement('li')
                _li.innerHTML = `<h3  class = 'w-full flex justify-between border-b-2 border-black'><strong class='w-[67%]'>${w.parentElement.children[0].innerText}</strong><button onclick='__clear(this)'  class = 'text-[17px] hover:scale-[1.2] hover:text-pink-700'>Not Done?</button></h3>`
                _li.classList.add('__li')
                let k = document.getElementById('three')
                k.appendChild(_li)
                w.parentElement.remove()
        }

        function __clear(w) {

                let _li2 = document.createElement('li')
                _li2.innerHTML = `<h3  class = 'w-full flex justify-between border-b-2 border-black'><strong class='w-[80%]'>${w.parentElement.children[0].innerText}</strong><button onclick='_clear(this)'  class = 'text-[20px] hover:scale-[1.2] hover:text-pink-700'>Done?</button></h3>`
                _li2.classList.add('__li')
                let k = document.getElementById('two')
                k.appendChild(_li2)
                w.parentElement.remove()


        }
        function clear_line(t) {
                t.parentElement.parentElement.remove()
        }
        function edit(r) {
                let j = r.parentElement.parentElement.children
                j[0].setAttribute("contentEditable", "true");
                j[0].focus();
        }

