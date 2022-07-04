const apiData = {
    url: `https://api.schooldigger.com/v2.0/autocomplete/schools?q=Meadowcreek&returnCount=10&appID=7b6332bf&appKey=55a9490dadd2e8a22422b901cf1ced67`,
    type: "Schools",
    id: "1",
}
//destructed
const {url, type, id} = apiData;
const apiUrl = `${url}${type}/${id}`;

// fetch(apiUrl)
//     .then((data) => data.json() )
//     .then((schools) => generateHtml(schools) )

//     const generateHtml = (data) => {
//         console.log(data)
//         console.log(data.schoolMatches[0])

//     }

    const getSchools = async () => {
        try {
            let searchTerm = document.getElementById("school-searching").value;
            const schools = await axios.get(
                `https://api.schooldigger.com/v2.0/autocomplete/schools?q=${searchTerm}&returnCount=5&appID=7b6332bf&appKey=55a9490dadd2e8a22422b901cf1ced67`
            );
            // console.log(schools);
            // console.log(schools.data.schoolMatches);
            let list = schools.data.schoolMatches;
            SchoolsFiltered(list);

        } catch (error) {
            console.error(error);
        }
    }

    let SchoolsFiltered = (list) => {
        const html = `
            <div class="school"> ${list[1].schoolName}</div>`;

           
            console.log(list);

            list.forEach((data) => {
                document.getElementById("search-list").innerHTML += 
                `
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">${data.schoolName}</div>
                    Content for list item
                    </div>
                    <span class="badge bg-primary rounded-pill">14</span>
                </li>
                `
            })
            return
    }
    

