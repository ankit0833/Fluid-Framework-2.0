class shop_collection extends HTMLElement {
    constructor() {
        super();
        var pagination_btn = document.querySelectorAll("[data-pagination]");
        var select_data = document.querySelectorAll("[select_data]");
        if (pagination_btn.length > 0) {
            this.pagination(pagination_btn);

        }
        this.pagination(select_data);
    }
    pagination(pagination_btn) {
        pagination_btn.forEach((button) => {
            button.addEventListener('click', () => {
                event.preventDefault();
                var page_no = button.getAttribute("page_no");
                fetch(`?page=${page_no}&view=alternate`)
                    .then(response => response.text())
                    .then((data) => {
                        document.querySelector("shop-collection").innerHTML = data;
                    });
            })
        })
    }

    selectdata(select_data) {
        select_data.addEventListener('change', (event) => {
            var product_no = select_data.getAttribute("value");
            
        })
    }



}
customElements.define('shop-collection', shop_collection);