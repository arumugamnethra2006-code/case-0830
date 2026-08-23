/* ==========================================
   CASE 0830 — FINAL INVESTIGATION SYSTEM
========================================== */


/* ==========================================
   INITIAL ELEMENTS
========================================== */

const loadingScreen = document.getElementById("loading-screen");
const loadingText = document.getElementById("loading-text");

const mainInterface = document.getElementById("main-interface");
const warningScreen = document.getElementById("warning-screen");

const beginButton = document.getElementById("begin-button");
const acceptButton = document.getElementById("accept-button");


/* ==========================================
   LOADING SEQUENCE
========================================== */

const loadingMessages = [
    "INITIALIZING SECURE CONNECTION...",
    "CONNECTING TO VEYLORN DATABASE...",
    "VERIFYING CASE ARCHIVE...",
    "CHECKING CASE 0830...",
    "WARNING: RECORD NOT FOUND",
    "RECOVERING CLASSIFIED DATA...",
    "ACCESS CHANNEL ESTABLISHED..."
];

let loadingIndex = 0;

function runLoadingSequence() {

    if (!loadingScreen || !loadingText) return;

    loadingText.textContent =
        loadingMessages[loadingIndex];

    loadingIndex++;

    if (loadingIndex < loadingMessages.length) {

        setTimeout(
            runLoadingSequence,
            650
        );

    } else {

        setTimeout(() => {

            loadingScreen.style.opacity = "0";
            loadingScreen.style.visibility = "hidden";

            if (mainInterface) {
                mainInterface.classList.remove("hidden");
            }

        }, 900);

    }
}


/* ==========================================
   BEGIN INVESTIGATION
========================================== */

if (beginButton) {

    beginButton.addEventListener(
        "click",
        () => {

            mainInterface.classList.add("hidden");
            warningScreen.classList.remove("hidden");

            window.scrollTo(0, 0);

        }
    );

}


/* ==========================================
   ACCEPT WARNING
========================================== */

if (acceptButton) {

    acceptButton.addEventListener(
        "click",
        () => {

            warningScreen.classList.add("hidden");

            startInvestigation();

        }
    );

}


/* ==========================================
   CHARACTER PORTRAIT SYSTEM
========================================== */

function characterPortrait(
    name,
    image,
    alt
) {

    return `
        <div class="character-portrait">

            <img
                src="assets/characters/${image}"
                alt="${alt}"
                class="character-image"
            >

        </div>
    `;

}


/* ==========================================
   INVESTIGATION START
========================================== */

function startInvestigation() {

    document.body.innerHTML = `

        <div class="investigation-start">

            <div class="case-loading">

                <div class="classification">
                    ACCESS GRANTED
                </div>

                <h1>
                    CASE 0830
                </h1>

                <div class="divider"></div>

                <p>
                    RECOVERING CLASSIFIED INVESTIGATION...
                </p>

                <p class="small-text">
                    PLEASE WAIT
                </p>

            </div>

        </div>

    `;

    setTimeout(() => {

        loadActOne();

    }, 2200);

}


/* ==========================================
   ACT 01 — MISSING PERSON
========================================== */

function loadActOne() {

    document.body.innerHTML = `

        <div class="act-screen">

            <header class="case-header">

                <div>
                    VEYLORN // CID
                </div>

                <div>
                    CASE <span>0830</span>
                </div>

                <div class="status">
                    ● ACTIVE
                </div>

            </header>


            <main class="case-content">

                <div class="classification">
                    ACT 01 // MISSING PERSON
                </div>

                <h1>
                    THE DISAPPEARANCE
                </h1>

                <p class="case-intro">

                    A person disappeared.

                    <br><br>

                    No official investigation exists.

                    <br><br>

                    Yet someone created a file.

                </p>


                <div class="file-card">

                    ${characterPortrait(
                        "veyra",
                        "veyra-solen.jpg",
                        "Veyra Solen"
                    )}

                    <div class="file-number">
                        FILE 001
                    </div>

                    <div class="file-title">
                        VEYRA SOLEN
                    </div>

                    <div class="file-status">
                        STATUS: MISSING
                    </div>

                    <div class="file-details">

                        <p>
                            AGE:
                            <span>29</span>
                        </p>

                        <p>
                            DATE OF DISAPPEARANCE:
                            <span>UNKNOWN</span>
                        </p>

                        <p>
                            LAST KNOWN LOCATION:
                            <span>UNKNOWN</span>
                        </p>

                        <p>
                            OFFICIAL CASE NUMBER:
                            <span>NONE</span>
                        </p>

                    </div>

                    <div class="classified-note">

                        No police investigation exists
                        under this name.

                        <br><br>

                        No missing-person report exists.

                        <br><br>

                        Yet someone created this file.

                    </div>

                    <button
                        class="case-button"
                        onclick="openFirstQuestion()"
                    >
                        INVESTIGATE
                    </button>

                </div>

            </main>

        </div>

    `;

}


/* ==========================================
   FIRST QUESTION
========================================== */

function openFirstQuestion() {

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="question-screen">

            <div class="classification">
                INVESTIGATION ENTRY
            </div>

            <h2>
                WHY ARE YOU LOOKING
                FOR VEYRA SOLEN?
            </h2>

            <p>
                There is no official reason.
            </p>

            <button
                class="case-button"
                onclick="continueInvestigation()"
            >
                I DON'T KNOW
            </button>

        </div>

    `;

}


/* ==========================================
   CONTINUE INVESTIGATION
========================================== */

function continueInvestigation() {

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="revelation">

            <div class="classification">
                SYSTEM RESPONSE
            </div>

            <h2>
                CORRECT.
            </h2>

            <p>
                You weren't supposed
                to know her.
            </p>

            <div class="divider"></div>

            <p class="small-text">
                EVIDENCE AVAILABLE: 01
            </p>

            <button
                class="case-button"
                onclick="openEvidenceOne()"
            >
                OPEN EVIDENCE 001
            </button>

        </div>

    `;

}


/* ==========================================
   EVIDENCE 001
========================================== */

function openEvidenceOne() {

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="evidence-screen">

            <div class="classification">
                EVIDENCE 001
            </div>

            <h2>
                RECOVERED DOCUMENT
            </h2>

            <div class="evidence-paper">

                <p>
                    03 / 01 / 20
                </p>

                <p>
                    12 / 05 / 18
                </p>

                <p>
                    01 / 22 / 15
                </p>

                <p>
                    04 / 01 / 18
                </p>

            </div>

            <p class="evidence-instruction">

                The document contains
                no explanation.

                <br><br>

                Something is hidden
                inside the numbers.

            </p>

            <input
                id="evidence-answer"
                type="text"
                placeholder="ENTER YOUR ANSWER"
                autocomplete="off"
            >

            <button
                class="case-button"
                onclick="checkEvidenceOne()"
            >
                SUBMIT
            </button>

            <p
                id="evidence-feedback"
                class="feedback"
            ></p>

        </div>

    `;

}


/* ==========================================
   EVIDENCE ANSWER
========================================== */

function checkEvidenceOne() {

    const input =
        document.getElementById(
            "evidence-answer"
        );

    const feedback =
        document.getElementById(
            "evidence-feedback"
        );

    const answer =
        input.value
        .trim()
        .toLowerCase();

    if (
        answer === "kael" ||
        answer === "kael vorn"
    ) {

        feedback.innerHTML = `
            ACCESS GRANTED.<br><br>
            <span>
                PERSON OF INTEREST IDENTIFIED:
                KAEL VORN
            </span>
        `;

        setTimeout(() => {

            loadKaelFile();

        }, 1800);

    } else {

        feedback.textContent =
            "ACCESS DENIED — TRY AGAIN.";

    }

}


/* ==========================================
   KAEL FILE
========================================== */

function loadKaelFile() {

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="character-file">

            <div class="classification">
                PERSON OF INTEREST
            </div>

            <div class="character-layout">

                ${characterPortrait(
                    "kael",
                    "kael-vorn.jpg",
                    "Kael Vorn"
                )}

                <div class="character-information">

                    <h2>
                        KAEL VORN
                    </h2>

                    <p class="status-line">
                        STATUS: UNKNOWN
                    </p>

                    <div class="character-data">

                        <p>
                            DATE OF BIRTH:
                            <span>REDACTED</span>
                        </p>

                        <p>
                            OCCUPATION:
                            <span>REDACTED</span>
                        </p>

                        <p>
                            LAST LOCATION:
                            <span>REDACTED</span>
                        </p>

                        <p>
                            POLICE RECORD:
                            <span>NO RECORD FOUND</span>
                        </p>

                    </div>

                </div>

            </div>

            <div class="character-warning">

                WHY DOES KAEL VORN'S NAME
                APPEAR IN VEYRA SOLEN'S FILE?

            </div>

            <button
                class="case-button"
                onclick="continueAfterKael()"
            >
                INVESTIGATE CONNECTION
            </button>

        </div>

    `;

}


/* ==========================================
   KAEL CONNECTION
========================================== */

function continueAfterKael() {

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="revelation">

            <div class="classification">
                DATABASE ERROR
            </div>

            <h2>
                KAEL VORN
            </h2>

            <p>
                NO OFFICIAL RECORD FOUND.
            </p>

            <div class="divider"></div>

            <p>
                But his name appears
                in Evidence 001.
            </p>

            <p class="small-text">
                CONTRADICTION DETECTED.
            </p>

            <button
                class="case-button"
                onclick="showNightTransition()"
            >
                CONTINUE
            </button>

        </div>

    `;

}


/* ==========================================
   SCENE 01
========================================== */

function showNightTransition() {

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="scene-transition">

            <div class="scene-number">
                SCENE 01
            </div>

            <div class="scene-line"></div>

            <h2>
                02:17 AM
            </h2>

            <p class="scene-location">
                VEYLORN CITY
            </p>

            <p class="scene-description">

                The city is still awake.

                <br><br>

                Somewhere beneath the rain,
                a telephone begins to ring.

            </p>

            <button
                class="case-button"
                onclick="openNightScene()"
            >
                ENTER SCENE
            </button>

        </div>

    `;

}


/* ==========================================
   NIGHT SCENE
========================================== */

function openNightScene() {

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="night-scene">

            <div class="scene-overlay">

                <div class="classification">
                    VEYLORN CITY // 02:17 AM
                </div>

                <h2>
                    SOMEONE KNOWS
                </h2>

                <p>

                    The telephone rings again.

                    <br><br>

                    You answer.

                </p>

                <button
                    class="case-button"
                    onclick="answerPhone()"
                >
                    ANSWER
                </button>

            </div>

        </div>

    `;

}


/* ==========================================
   PHONE SOUND
========================================== */

function playPhoneRing() {

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

    if (!AudioContext) return;

    const audioContext =
        new AudioContext();

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();

    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(
        700,
        audioContext.currentTime
    );

    gain.gain.setValueAtTime(
        0.08,
        audioContext.currentTime
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.35
    );

}


/* ==========================================
   PHONE CALL
========================================== */

function answerPhone() {

    playPhoneRing();

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="phone-scene">

            <div class="classification">
                INCOMING CALL // UNKNOWN
            </div>

            <div class="phone-text">

                <p>
                    ...
                </p>

                <p>
                    "You found her file."
                </p>

                <p>
                    "You shouldn't have."
                </p>

            </div>

            <div class="divider"></div>

            <p class="small-text">
                CALL TERMINATED
            </p>

            <button
                class="case-button"
                onclick="continueAfterCall()"
            >
                TRACE THE CALL
            </button>

        </div>

    `;

}


/* ==========================================
   CYRAN VEYL
========================================== */

function continueAfterCall() {

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="character-file">

            <div class="classification">
                NEW PERSON OF INTEREST
            </div>

            <div class="character-layout">

                ${characterPortrait(
                    "cyran",
                    "cyran-veyl.jpg",
                    "Cyran Veyl"
                )}

                <div class="character-information">

                    <h2>
                        CYRAN VEYL
                    </h2>

                    <p class="status-line">
                        STATUS: ACTIVE
                    </p>

                    <div class="character-data">

                        <p>
                            AGE:
                            <span>42</span>
                        </p>

                        <p>
                            OCCUPATION:
                            <span>INVESTIGATOR</span>
                        </p>

                        <p>
                            CONNECTION TO VEYRA:
                            <span>UNKNOWN</span>
                        </p>

                        <p>
                            CONNECTION TO KAEL:
                            <span>REDACTED</span>
                        </p>

                    </div>

                </div>

            </div>

            <div class="character-warning">

                CYRAN VEYL WAS THE LAST PERSON
                TO ACCESS VEYRA SOLEN'S FILE.

            </div>

            <button
                class="case-button"
                onclick="openCyranEvidence()"
            >
                VIEW RECORD
            </button>

        </div>

    `;

}


/* ==========================================
   CYRAN EVIDENCE
========================================== */

function openCyranEvidence() {

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="evidence-screen">

            <div class="classification">
                RESTRICTED RECORD
            </div>

            <h2>
                CYRAN VEYL
            </h2>

            <div class="evidence-paper">

                <p>
                    LAST FILE ACCESS:
                    02:17 AM
                </p>

                <p>
                    FILE ACCESSED:
                    VEYRA SOLEN
                </p>

                <p>
                    SECOND FILE:
                    KAEL VORN
                </p>

                <p>
                    ACTION:
                    DELETED
                </p>

            </div>

            <p class="evidence-instruction">

                Someone deleted the record.

                <br><br>

                The question is:

                <br><br>

                <strong>
                    WHY?
                </strong>

            </p>

            <button
                class="case-button"
                onclick="inspectCyranConnection()"
            >
                INVESTIGATE
            </button>

        </div>

    `;

}


/* ==========================================
   INVESTIGATION DECISION
========================================== */

function inspectCyranConnection() {

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="question-screen">

            <div class="classification">
                INVESTIGATION DECISION
            </div>

            <h2>
                WHO DO YOU TRUST?
            </h2>

            <p>

                Three names.

                <br>

                One missing woman.

                <br>

                And someone is lying.

            </p>

            <div class="choice-grid">

                <button
                    class="choice-button"
                    onclick="chooseSuspect('kael')"
                >
                    KAEL VORN
                </button>

                <button
                    class="choice-button"
                    onclick="chooseSuspect('cyran')"
                >
                    CYRAN VEYL
                </button>

                <button
                    class="choice-button"
                    onclick="chooseSuspect('veyra')"
                >
                    VEYRA SOLEN
                </button>

            </div>

        </div>

    `;

}


/* ==========================================
   CHOOSE SUSPECT
========================================== */

function chooseSuspect(choice) {

    const content =
        document.querySelector(".case-content");

    let title = "";
    let message = "";
    let clue = "";

    if (choice === "kael") {

        title = "KAEL VORN";

        message =
            "You think Kael is hiding something.";

        clue =
            "A photograph was found in his apartment.";

    }

    else if (choice === "cyran") {

        title = "CYRAN VEYL";

        message =
            "His records are suspiciously clean.";

        clue =
            "Someone accessed his deleted files.";

    }

    else {

        title = "VEYRA SOLEN";

        message =
            "You believe Veyra left the clues intentionally.";

        clue =
            "The note was written after her disappearance.";

    }

    content.innerHTML = `

        <div class="revelation">

            <div class="classification">
                DECISION RECORDED
            </div>

            <h2>
                ${title}
            </h2>

            <p>
                ${message}
            </p>

            <div class="divider"></div>

            <p class="small-text">
                NEW CLUE DISCOVERED
            </p>

            <p>
                ${clue}
            </p>

            <button
                class="case-button"
                onclick="openNewClue('${choice}')"
            >
                OPEN CLUE
            </button>

        </div>

    `;

}


/* ==========================================
   NEW CLUE
========================================== */

function openNewClue(choice) {

    const content =
        document.querySelector(".case-content");

    let clueTitle = "";
    let clueText = "";

    if (choice === "kael") {

        clueTitle =
            "THE PHOTOGRAPH";

        clueText =
            "Kael was photographed outside Veyra's apartment three nights before she disappeared.";

    }

    else if (choice === "cyran") {

        clueTitle =
            "DELETED RECORD";

        clueText =
            "Cyran accessed Veyra's file at 02:17 AM — exactly when the mysterious phone call was made.";

    }

    else {

        clueTitle =
            "VEYRA'S NOTE";

        clueText =
            "The handwriting matches the note found in the room. Veyra knew someone would eventually find it.";

    }

    content.innerHTML = `

        <div class="evidence-screen">

            <div class="classification">
                NEW EVIDENCE UNLOCKED
            </div>

            <h2>
                ${clueTitle}
            </h2>

            <div class="evidence-paper">

                <p>
                    ${clueText}
                </p>

            </div>

            <button
                class="case-button"
                onclick="continueAfterChoice()"
            >
                CONTINUE INVESTIGATION
            </button>

        </div>

    `;

}


/* ==========================================
   DEEP ARCHIVE
========================================== */

function continueAfterChoice() {

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="archive-screen">

            <div class="classification">
                DEEP ARCHIVE // ACCESS GRANTED
            </div>

            <h2>
                CASE 0830
            </h2>

            <p class="archive-warning">

                THE FOLLOWING RECORD WAS NEVER
                MEANT TO BE FOUND.

            </p>

            <div class="archive-files">

                <button
                    class="archive-file"
                    onclick="openArchiveFile('VEYRA')"
                >
                    FILE 01
                    <span>VEYRA SOLEN</span>
                </button>

                <button
                    class="archive-file"
                    onclick="openArchiveFile('KAEL')"
                >
                    FILE 02
                    <span>KAEL VORN</span>
                </button>

                <button
                    class="archive-file"
                    onclick="openArchiveFile('CYRAN')"
                >
                    FILE 03
                    <span>CYRAN VEYL</span>
                </button>

                <button
                    class="archive-file"
                    onclick="openArchiveFile('CASE')"
                >
                    FILE 04
                    <span>CASE 0830</span>
                </button>

            </div>

        </div>

    `;

}


/* ==========================================
   OPEN ARCHIVE FILE
========================================== */

function openArchiveFile(file) {

    const content =
        document.querySelector(".case-content");

    let title = "";
    let text = "";

    if (file === "VEYRA") {

        title = "VEYRA SOLEN";

        text = `
            Missing.
            <br><br>
            Official investigation: NONE.
            <br><br>
            Last confirmed sighting:
            UNKNOWN.
        `;

    }

    else if (file === "KAEL") {

        title = "KAEL VORN";

        text = `
            No official record.
            <br><br>
            Name appears repeatedly
            inside Veyra's private files.
        `;

    }

    else if (file === "CYRAN") {

        title = "CYRAN VEYL";

        text = `
            Investigator.
            <br><br>
            Accessed the case archive
            at 02:17 AM.
            <br><br>
            Deleted the access record.
        `;

    }

    else {

        title = "CASE 0830";

        text = `
            THREE PEOPLE.
            <br><br>
            ONE DISAPPEARANCE.
            <br><br>
            NO OFFICIAL CASE.
            <br><br>
            SOMEONE IS WATCHING.
        `;

    }

    content.innerHTML = `

        <div class="evidence-screen">

            <div class="classification">
                ARCHIVE RECORD
            </div>

            <h2>
                ${title}
            </h2>

            <div class="evidence-paper">

                <p>
                    ${text}
                </p>

            </div>

            <button
                class="case-button"
                onclick="continueAfterArchive()"
            >
                CLOSE FILE
            </button>

        </div>

    `;

}


/* ==========================================
   ARCHIVE ALERT
========================================== */

function continueAfterArchive() {

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="revelation">

            <div class="classification">
                SYSTEM ALERT
            </div>

            <h2>
                SOMEONE IS WATCHING.
            </h2>

            <p>
                Your access has been detected.
            </p>

            <div class="divider"></div>

            <p class="small-text">
                CONNECTION TERMINATED
            </p>

            <button
                class="case-button"
                onclick="openFinalPuzzle()"
            >
                DECRYPT ARCHIVE
            </button>

        </div>

    `;

}


/* ==========================================
   FINAL PUZZLE
========================================== */

function openFinalPuzzle() {

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="evidence-screen">

            <div class="classification">
                FINAL EVIDENCE
            </div>

            <h2>
                THE THREE NUMBERS
            </h2>

            <p class="evidence-instruction">

                Every important event happened
                at the same time.

                <br><br>

                Veyra's last file:
                <strong>08:30</strong>

                <br>

                Cyran's access:
                <strong>02:17</strong>

                <br>

                The recovered note:
                <strong>11:13</strong>

                <br><br>

                Three times.

                <br>

                One message.

                <br><br>

                What number do they create?

            </p>

            <input
                id="final-answer"
                type="text"
                placeholder="ENTER 4 DIGITS"
                autocomplete="off"
                maxlength="4"
            >

            <button
                class="case-button"
                onclick="checkFinalPuzzle()"
            >
                DECRYPT
            </button>

            <p
                id="final-feedback"
                class="feedback"
            ></p>

        </div>

    `;

}


/* ==========================================
   FINAL PUZZLE ANSWER
========================================== */

function checkFinalPuzzle() {

    const input =
        document.getElementById(
            "final-answer"
        );

    const feedback =
        document.getElementById(
            "final-feedback"
        );

    const answer =
        input.value.trim();

    if (answer === "0830") {

        feedback.innerHTML = `
            ACCESS GRANTED.<br><br>
            <span>
                THE ARCHIVE IS OPEN.
            </span>
        `;

        setTimeout(() => {

            openTruthArchive();

        }, 1800);

    }

    else {

        feedback.textContent =
            "DECRYPTION FAILED — RECHECK THE EVIDENCE.";

    }

}


/* ==========================================
   TRUTH ARCHIVE
========================================== */

function openTruthArchive() {

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="revelation">

            <div class="classification">
                LEVEL ZERO // TRUTH
            </div>

            <h2>
                CASE 0830
            </h2>

            <p>
                The case was never about
                finding Veyra.
            </p>

            <p>
                It was about finding
                the person she trusted.
            </p>

            <div class="divider"></div>

            <p class="small-text">
                FINAL RECORD UNLOCKED
            </p>

            <button
                class="case-button"
                onclick="openFinalReveal()"
            >
                OPEN FINAL RECORD
            </button>

        </div>

    `;

}


/* ==========================================
   FINAL BIRTHDAY REVEAL
========================================== */

function openFinalReveal() {

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="revelation birthday-reveal">

            <div class="classification">
                CASE 0830 // FINAL RECORD
            </div>

            <h2>
                YOU FOUND THE TRUTH.
            </h2>

            <div class="divider"></div>

            <p class="birthday-message">

                This investigation was never really
                about Veyra.

                <br><br>

                It was created for someone
                who deserves to know how much
                she means to the people around her.

                <br><br>

                Someone I call Thango.

                <br><br>

                Someone whose existence has
                left evidence everywhere:

                <br><br>

                in memories,<br>
                in laughter,<br>
                in late-night conversations,<br>
                in the little things nobody else notices.

            </p>

            <div class="birthday-name">

                HAPPY BIRTHDAY,
                <br>

                <span>
                    SUNSHINE
                </span>

            </div>

            <p class="small-text">

                CASE STATUS:

                <span class="case-closed">
                    CLOSED
                </span>

            </p>

            <button
                class="case-button"
                onclick="showBirthdayMessage()"
            >
                ONE LAST MESSAGE
            </button>

        </div>

    `;

}


/* ==========================================
   PERSONAL BIRTHDAY MESSAGE
========================================== */

function showBirthdayMessage() {

    const content =
        document.querySelector(".case-content");

    content.innerHTML = `

        <div class="revelation birthday-reveal">

            <div class="classification">
                CASE 0830 // PERSONAL FILE
            </div>

            <h2>
                DEAR SUNSHINE,
            </h2>

            <div class="divider"></div>

            <p class="birthday-message">

                If you ever wonder whether
                you matter to people,

                <br><br>

                I hope you remember this case.

                <br><br>

                Because someone took the time
                to build an entire investigation
                just to remind you that your
                existence matters.

                <br><br>

                You are loved.
                You are remembered.
                You are someone's favourite
                kind of chaos.

                <br><br>

                And no matter how many years pass,

                <br><br>

                you'll always be my
                <strong>Thango.</strong>

            </p>

            <div class="birthday-name">

                HAPPY BIRTHDAY,

                <br>

                <span>
                    SUNSHINE ❤️
                </span>

            </div>

            <p class="small-text">
                CASE 0830 // CLOSED
            </p>

        </div>

    `;

}


/* ==========================================
   START SYSTEM
========================================== */

runLoadingSequence();
