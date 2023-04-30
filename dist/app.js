const bars = document.querySelector('#bars')
const menu = document.querySelector('#menu')
const links = document.querySelector('#links')
const links2 = document.querySelector('#links2')
const links3 = document.querySelector('#links3')
const links4 = document.querySelector('#links4')
const defaultscroll = document.querySelector('#defaultscroll')
const picsdiv = document.querySelector('#picsdiv')
const picsubdiv = document.querySelector('#picsubdiv')
const pic = document.querySelector('#pic')
const pic2 = document.querySelector('#pic2')
const pic3 = document.querySelector('#pic3')
const pic4 = document.querySelector('#pic4')
const pic5 = document.querySelector('#pic5')
const pic6 = document.querySelector('#pic6')
const boxdiv = document.querySelector('#boxdiv')
const boxbordern = document.querySelector('#boxbordern')


bars.addEventListener('click', () => {
    if (menu.classList.contains('hidden') && window.innerWidth < 768) {
        menu.classList.remove(
            'hidden',
            'items-end'
            );
        menu.classList.add(
            'flex',
            'flex-col',
            'text-center',
            'align-center',
            'bg-gray-800',
            'w-full',
            'absolute',
            'top-32',
            'border-2',
            'start-start',
            'rounded-xl',
            'ml-0'
            );
        links.classList.remove(
            'px-4'
        );
        links.classList.add(
            'py-4'
        );
        links2.classList.remove(
            'px-4'
        );
        links2.classList.add(
            'py-4'
        );
        links3.classList.remove(
            'px-4'
        );
        links3.classList.add(
            'py-4'
        );
        links4.classList.remove(
            'px-4'
        );
        links4.classList.add(
            'py-4'
        );
} else {
    menu.classList.add(
        'hidden',
        'items-end'
        );
}
});

menu.addEventListener('click', () => {
    menu.classList.add(
        'hidden',
        'items-end'
    );
});


window.addEventListener('resize', () =>  {
    if (window.innerWidth >= 768) {
        menu.classList.add(
            'hidden',
            'items-end'
            );
        menu.classList.remove(
            'flex',
            'flex-col',
            'text-center',
            'align-center',
            'bg-gray-800',
            'w-full',
            'absolute',
            'top-32',
            'border-2',
            'ml-0'
            );
        links.classList.add(
            'px-4'
        );
        links.classList.remove(
            'py-4'
        );
        links2.classList.add(
            'px-4'
        );
        links2.classList.remove(
            'py-4'
        );
        links3.classList.add(
            'px-4'
        );
        links3.classList.remove(
            'py-4'
        );
        links4.classList.add(
            'px-4'
        );
        links4.classList.remove(
            'py-4'
        );

// Scrolling images
            defaultscroll.classList.add(
                'flex',
                'justify-center'
            );
            picsdiv.classList.add(
                'container',
                'max-w-4xl'
            );
            picsubdiv.classList.add(
                'grid',
                'grid-cols-2',
                'justify-between',
                'relative'
            );
            defaultscroll.classList.remove(
            );
            picsdiv.classList.remove(
                'h-[300px]',
                'w-[auto]'
            );
            picsubdiv.classList.remove(
                'justify-center',
                'flex',
                'overflow-x-auto',
                'relative'
            );
        
            pic.classList.add(
                'max-md:h-[200px]',
                'max-md:w-[200px]'
            );
            pic2.classList.add(
                'max-md:h-[200px]',
                'max-md:w-[200px]'
            );
            pic3.classList.add(
                'max-md:h-[200px]',
                'max-md:w-[200px]'
            );
            pic4.classList.add(
                'max-md:h-[200px]',
                'max-md:w-[200px]'
            );
            pic5.classList.add(
                'max-md:h-[200px]',
                'max-md:w-[200px]'
            );;
            pic6.classList.add(
                'max-md:h-[200px]',
                'max-md:w-[200px]'
            );
            pic.classList.remove(
                'h-[200px]',
                'w-[500px]'
            );
            pic2.classList.remove(
                'h-[200px]',
                'w-[500px]'
            );
            pic3.classList.remove(
                'h-[200px]',
                'w-[500px]'
            );
            pic4.classList.remove(
                'h-[200px]',
                'w-[500px]'
            )
            pic5.classList.remove(
                'h-[200px]',
                'w-[500px]'
            )
            pic6.classList.remove(
                'h-[200px]',
                'w-[500px]'
            );

            /* Services */

            boxdiv.classList.add(
                'flex',
                'justify-center'
            );
            boxborder.classList.add(
                'container',
                'max-w-3xl',
                'grid',
                'grid-cols-2'
            );
            boxdiv.classList.remove(
            );
            boxborder.classList.remove(
                'flex',
                'w-[auto]',
                'h-[400px]',
                'overflow-x-auto'
            );
        }
});

    window.addEventListener('resize', () =>  {
        if (window.innerWidth < 767) {
            defaultscroll.classList.remove(
                'flex',
                'justify-center'
            );
            picsdiv.classList.remove(
                'container',
                'max-w-4xl'
            );
            picsubdiv.classList.remove(
                'grid',
                'grid-cols-2',
                'justify-between',
                'relative'
            );
            defaultscroll.classList.add(
            );
            picsdiv.classList.add(
                'h-[300px]',
                'w-[auto]'
            );
            picsubdiv.classList.add(
                'justify-center',
                'flex',
                'overflow-x-auto',
                'relative'
            );
            pic.classList.remove(
                'max-md:h-[200px]',
                'max-md:w-[200px]'
            );
            pic.classList.add(
                'h-[200px]',
                'w-[500px]'
            );
            pic2.classList.remove(
                'max-md:h-[200px]',
                'max-md:w-[200px]'
            );
            pic2.classList.add(
                'h-[200px]',
                'w-[500px]'
            );
            pic3.classList.remove(
                'max-md:h-[200px]',
                'max-md:w-[200px]'
            );
            pic3.classList.add(
                'h-[200px]',
                'w-[500px]'
            );
            pic4.classList.remove(
                'max-md:h-[200px]',
                'max-md:w-[200px]'
            );
            pic4.classList.add(
                'h-[200px]',
                'w-[500px]'
            );
            pic5.classList.remove(
                'max-md:h-[200px]',
                'max-md:w-[200px]'
            );
            pic5.classList.add(
                'h-[200px]',
                'w-[500px]'
            );
            pic6.classList.remove(
                'max-md:h-[200px]',
                'max-md:w-[200px]'
            );
            pic6.classList.add(
                'h-[200px]',
                'w-[500px]'
            );
            
            /* Services */

            boxdiv.classList.remove(
                'flex',
                'justify-center'
            );
            boxborder.classList.remove(
                'container',
                'max-w-3xl',
                'grid',
                'grid-cols-2'
            );
            boxdiv.classList.add(
            );
            boxborder.classList.add(
                'flex',
                'w-[auto]',
                'h-[400px]',
                'overflow-x-auto'
            );
        }
    });

    window.addEventListener('load', () =>  {
        if (window.innerWidth < 768) {
            defaultscroll.classList.remove(
                'flex',
                'justify-center'
            );
            picsdiv.classList.remove(
                'container',
                'p-64',
                'max-w-4xl'
            );
            picsubdiv.classList.remove(
                'grid',
                'grid-cols-2',
                'justify-between'
            );
            defaultscroll.classList.add(
            );
            picsdiv.classList.add(
                'h-60',
                'overflow-x-auto'
            );
            picsubdiv.classList.add(
                'justify-center',
                'flex',
                'w-[600px]'
            );

            //Services

            boxdiv.classList.remove(
                'flex',
                'justify-center'
            );
            boxborder.classList.remove(
                'container',
                'max-w-3xl',
                'grid',
                'grid-cols-2'
            );
            boxdiv.classList.add(
            );
            boxborder.classList.add(
                'flex',
                'w-[auto]',
                'h-[400px]',
                'overflow-x-auto'
            );
        }
    });