let FetchServise = (function () {
    function Read() {
        let url = "Contact/Read";

        fetch(url)
            .then(response => response.json())
            .then(commits => console.log(commits));
    }

    function Create() {
        let form = new FormData(document.forms.MyForm);

        let url = "Contact/Create";
        let response = fetch(utr, {
            method: 'POST', headers: {'Content-Type': 'application/json;charset=utf-8'}, body: JSON.stringify(form)
        });

        response.json();
    }

    return {
        Read: Read, Create: Create
    }
})();

let XMLService = (function () {
    function Create() {
        try {
            let form = new FormData(document.forms.MyForm);
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'Contact/Create/');
            xhr.send(form);

            xhr.onload = () => {
                console.log(xhr.response);
            };
        } catch (e) {
            console.log(e.error());
        }
    }

    function Read() {
        try {
            //let value = document.getElementById("readContactId").value;

            let xhr = new XMLHttpRequest();
            let url = `Contact/Read/?id=${1}`;

            xhr.open('GET', url)
            xhr.send();

            xhr.onload = () => {
                console.log(xhr.response);
            }
        } catch (e) {
            console.log(e);
        }
    }

    function Update() {
        try {
            let form = new FormData(document.forms.MyForm);
            let xhr = new XMLHttpRequest();
            xhr.open('PUT', 'Contact/Update/');
            xhr.send(form);

            xhr.onload = () => {
                console.log(xhr.response);
            };
        } catch (e) {
            console.log(e.error());
        }
    }

    function Delete() {
        try {
            let value = document.getElementById("deleteContactId").value;

            let xhr = new XMLHttpRequest();
            let url = `Contact/Delete/?id=${value}`;

            xhr.open('DELETE', url);
            xhr.send();

            xhr.onload = () => {
                console.log(xhr.response);
            }
        } catch (e) {
            console.log(e);
        }
    }

    return {
        Create: Create, Read: Read, Update: Update, Delete: Delete
    }
})();

function APIServiceFactory(serviceType) {
    if (serviceType === 'XMLHttpRequest') {
        return XMLService;
    }
    if (serviceType === 'Fetch') {
        return FetchServise;
    }
}

//APIServiceFactory('XMLHttpRequest').Read(1);