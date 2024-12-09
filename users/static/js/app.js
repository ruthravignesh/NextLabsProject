const btns = document.querySelectorAll(".side-item");
document.addEventListener("DOMContentLoaded", () => {
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            btns.forEach((btn1) => {
                if (btn1 != btn) {
                    btn1.classList.remove("active");
                }
            })
            btn.classList.add("active");
            document.body.classList.remove('close-overflow');
            document.body.classList.remove('close-horoverflow');
            if (btn.classList.contains("Home") || btn.classList.contains("Task")) {
                document.body.classList.add("close-horoverflow");
            }
            else {
                document.body.classList.add("close-overflow");
            }
        })
    })
    var nav = document.querySelector(".sidenav");
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    nav.style.height = height + "px";
})

const files = document.querySelector(".home");

appret();
async function appret() {
    let link = new URL(`http://127.0.0.1:8000/api/allapps`);
    const response = await fetch(link);
    const data = await response.json();
    displayitems(data);
}

function displayitems(data) {
    let displayMenu = data.map(function (item) {

        return `<div class="card file" style="background-color: #DFE6ED">
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <div class="col box1">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABCQkL7+/v39/dPT0+mpqbGxsbs7OwXFxe2trbJycl3d3fU1NQvLy+jo6M7OzuPj4/j4+NJSUmFhYVvb29VVVVbW1tnZ2fX19dgYGDg4OAgICA8PDxiYmKTk5MoKCh+fn68vLwLCwucnJySkpJeWSrHAAAErUlEQVR4nO3d63KiQBSFURAiFyUqERM1idHJvP8rzkQdoa1Aw4HeRzP7+03RrECkikvjeYwxxhhjjLFbK87SsdMOWajpyzavvvNei7WWL1i4552a6uzHoEABfX+lQpzigL7/rEAcI4F/92KMBoZzrBB/oEb/Bk4jlz2WRPSBev4dnQZuh3nz1YinH9LE8X9HYPwvQA/UYHUcc+54TFMIJQYPxyFHGGGicKBihQ9LPBErfPLwRLQQT4QLS+IGQ8QL0XtRQQgmagixB6qKEErUESIPVCUhkKglLInvrofWEsL+F/WEKKKiEHSgagpL4ovDKwyqQshe1BVWiM72orIQcKBqCytER5ugLnRO1Be6PlBvQFgSCxfEWxC6PVBvQuj0QL0NocsDFST0TsN81A7jjogSnu+kL2sXuDxLMPSBWiPMZp+z1n3OJtatSv9t/6zucZTLvZspQNj92QXrtYj4V/uVpe6Fglv7O9tAv9uv623Qf5lvhavuwifbcRo+tF/ZxLnwvbtwZR0pH7Ve2cK5MLJswTeN7UOFL21XVjgXerOPbr6k3V99UrRb72rIE0bN2SLMOtX6OYd4O2kqOt8qBgiVCkY/XRhSKIhCbBRKohAbhZIoxEahJAqxUSiJQmwUSqIQG06YL0b1vT3tqlee8uVo3rB0U/PRItcR5raLfqOSuO33fu2HQYQJl03bdKy8ALzvBby63wYT2q+/l3fA+r6+OFIRdtmHfd+x1dmHW9vNvsfy/3DdD5hsVYTedvrY0HxZ/XlYF03LWpoaQJ4PRVGIjUJJFGKjUBKF2CiURCE2CiVRiI1CSf+rMEinRTF13d8hUtMCE4ZPPqqrgVHCTxjQ9z9VhLhdePUaDUwInEjRfOIZJsyAwkxF6EWrBNMqMsYFng+DGNMVhWd8SRRio1AShdgolEQhNgolUYiNQkkUYqNQ0hDzYlxPkmGsaT1uWjozh4UJg36P4xWVldkeAjTn84cJ+37yYnZZk33uAmOqApiwwxQW31Y+M7q3LvugIhTMi2H0fFmT/Rs97ypCwbwYRuUEM/anT43Libjf0q7zYhi9Vm9FpI+Ny37MjHGBZ4tw3W1ijErruP2a1tfD8owviEJsFEqiEBuFkijERqEkCrFRKIlCbBRKqhHGkyiKGidx7N/XCFdTSuKEuw6z/vbqlzk7L0x4APm+OqgIn4HC5+rAMKFgpmRxxgTEMGHatEkDZ0zejbszs4cB9zp3Zjxve0gRHcwJB3jGF0UhNgolUYiNQkkUYqNQEoXYKJREITYKJbkX5tu8vh/whmXU/F74m/mNtTsUbht9XxlPFN+hcGcVvlQXv0Ph3irUmXFguOz3B4zHL+9QaP1WpPlpyDsUet5kt6jv90Fp9ha1KJREITYKJVGIjUJJFGKjUBKF2CiURCE2CiUFp6f05jciPH15aNCvx5/nuUxy+5KA8uS4NYV9yQ6d3ycfdqXSztetFoOudHJaqb9JI+3SzXlbJvbN7lDY96Nbwzf0j0LfSTCGb2zf6G4h59Rt0/A/Cdbr0tiKQU8V5+zzc+Aa9nf0UrZJtGXHkk1m31hhcZaOtUuz2L6hjDHGGGOMMXB/AFbjgPStNOjZAAAAAElFTkSuQmCC" alt="" class="file-image">
                    </div>
                    <div class="col box1">
                        <h4>${item.name}</h4>
                        <a href="#" >
                            <input type=button value="View-in-detail" class="View-in-detail" onclick="myfunction(${item.id})"/>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="row points">
                        <h6>${item.points} Points</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`
    })
    displayMenu = displayMenu.join("");
    files.innerHTML = displayMenu;
}
const home3 = document.querySelector(".home");
const detail3 = document.querySelector('#view-detail');
const detailTitle = document.querySelector('#detail-title');
const detailPoints = document.querySelector('#detail-points');
const dropzone = document.querySelector("#dropzone");
console.log(dropzone);
const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/, "$1");
function myfunction(id) {
    getapp()

    async function getapp() {
        let link3 = new URL(`http://127.0.0.1:8000/api/getapp/${id}`);
        const response3 = await fetch(link3);
        const data3 = await response3.json();
        console.log(data3);
        detailTitle.textContent = data3.name;
        detailPoints.textContent = data3.points + " Points";
        home3.style.display = "none";
        detail3.style.display = "block";
        localStorage.setItem('appname', data3.name);
        localStorage.setItem('apppoints', data3.points);
        dropzone.addEventListener("change", () => {
            const addfile1 = {
                "file": null,
                "name": data3.name,
                "points": data3.points,
                "complete": false,
            };
            saveapp();
            async function saveapp() {
                fetch("http://127.0.0.1:8000/api/saveapp", {
                    method: "POST",
                    body: JSON.stringify(addfile1),
                    headers: {
                        "Content-type": "application/json",
                        'X-CSRFToken': csrfToken,
                    }
                }).then(response => response.json()).then(json => alert("Screenshot Saved"));
            }
        })
    }
}

const homebtn = document.querySelector(".Home");
homebtn.addEventListener("click", () => {
    home3.style.display = "block";
})

//fetch get
const logoutbtn = document.querySelector(".logout");
logoutbtn.addEventListener("click", () => {
    fetch("http://127.0.0.1:8000/api/logout").then(response => response.json()).then(json => console.log(json));
    alert("Logout Successful");
    window.location.href = "http://127.0.0.1:8000/users/user";
})




