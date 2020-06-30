let menuObj = [
                    {
                        menu : 'home',
                        link : 'home',
                        children : 
                            [
                                {
                                    menu : 'kontak',
                                    link : 'home/kontak',
                                    children : []
                                },
                                {
                                    menu : 'alamat',
                                    link : 'home/alamat',
                                    children : []
                                }
                            ]   
                    },
                    {
                        menu : 'app',
                        link : 'admin/app',
                        children : []  
                    }
                ];

function listmenu(arrNumber){
    let menu = '';
    arrNumber.forEach(function(element){
        menu += `<li><a href=${element.link}>${element.menu}</a>`;
        menu += listmenu(element.children);
        menu += '</li>';
    });

    if(arrNumber.length){
        menu = '<ul>' + menu + '</ul>';
    }
    console.log(menu);
    return menu;
}

listmenu(menuObj);