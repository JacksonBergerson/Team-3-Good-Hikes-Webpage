const LOGIN_SESSION_KEY = "goodHikesClientLoggedIn";
const NOTES_STORAGE_KEY = "goodHikesGuideNotes";

// only allow note management during an active client session
if (sessionStorage.getItem(LOGIN_SESSION_KEY) !== "true") {
    window.location.replace("./login.html");
} else {
    const noteForm = document.getElementById("note-form");
    const noteMessage = document.getElementById("note-message");
    const savedNotes = document.getElementById("saved-notes");
    const hikeSelect = document.getElementById("hike-id");

    // use the shared hike data so each option matches a trail details page
    Object.entries(hikes).forEach(function (entry) {
        const option = document.createElement("option");
        option.value = entry[0];
        option.textContent = entry[1].name;
        hikeSelect.appendChild(option);
    });

    function readNotes() {
        // validate saved notes and make sure they reference known trails
        const storedNotes = localStorage.getItem(NOTES_STORAGE_KEY);
        const storedRecords = storedNotes ? JSON.parse(storedNotes) : [];

        if (!Array.isArray(storedRecords)) {
            throw new Error("Saved notes are not in the expected format.");
        }

        return storedRecords.map(function (note) {
            if (!note || typeof note !== "object" || typeof note.text !== "string") {
                throw new Error("A saved note is not in the expected format.");
            }

            const hikeId = note.hikeId;
            if (!Object.prototype.hasOwnProperty.call(hikes, hikeId)) {
                throw new Error("A saved note is associated with an unknown trail. Remove or correct that note before saving again.");
            }

            return {
                hikeId: hikeId,
                trailName: hikes[hikeId].name,
                text: note.text
            };
        });
    }

    function displayNotes(notes) {
        savedNotes.replaceChildren();

        if (notes.length === 0) {
            const emptyMessage = document.createElement("li");
            emptyMessage.textContent = "No notes have been added yet.";
            savedNotes.appendChild(emptyMessage);
            return;
        }

        notes.forEach(function (note) {
            const item = document.createElement("li");
            const trailName = document.createElement("strong");
            const noteText = document.createElement("p");

            // treat note content as text, not HTML
            trailName.textContent = note.trailName;
            noteText.textContent = note.text;
            item.append(trailName, noteText);
            savedNotes.appendChild(item);
        });
    }

    document.getElementById("logout-button").addEventListener("click", function () {
        sessionStorage.removeItem(LOGIN_SESSION_KEY);
        window.location.assign("./login.html");
    });

    noteForm.addEventListener("submit", function (event) {
        event.preventDefault();
        noteMessage.textContent = "";

        const formData = new FormData(noteForm);
        const hikeId = formData.get("hike-id");
        const note = {
            hikeId: hikeId,
            trailName: Object.prototype.hasOwnProperty.call(hikes, hikeId) ? hikes[hikeId].name : "",
            text: formData.get("note-text").trim()
        };

        if (!Object.prototype.hasOwnProperty.call(hikes, hikeId) || !note.text) {
            noteMessage.textContent = "Choose a trail and enter a guide note.";
            return;
        }

        try {
            const notes = readNotes();
            // put the newest note first and save it for display on the trail page
            notes.unshift(note);
            localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
            displayNotes(notes);
            noteForm.reset();
            noteMessage.textContent = "Guide note saved in this browser.";
        } catch (error) {
            noteMessage.textContent = `Unable to save guide note: ${error.message}`;
        }
    });

    try {
        displayNotes(readNotes());
    } catch (error) {
        noteMessage.textContent = `Unable to load saved notes: ${error.message}`;
    }
}
