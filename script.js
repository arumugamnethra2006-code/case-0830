/* ==========================================
   CASE 0830 — MAIN SYSTEM
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

            loadingScreen.style.visibility =
                "hidden";

            mainInterface.classList.remove(
                "hidden"
            );

        }, 900);

    }
}


/* ==========================================
   BEGIN INVESTIGATION
========================================== */

beginButton.addEventListener(
    "click",
    () => {

        mainInterface.classList.add(
            "hidden"
        );

        warningScreen.classList.remove(
            "hidden"
        );

        window.scrollTo(0, 0);

    }
);


/* ==========================================
   ACCEPT WARNING
========================================== */

acceptButton.addEventListener(
    "click",
    () => {

        warningScreen.classList.add(
            "hidden"
        );

        startInvestigation();

    }
);


/* ==========================================
   INVESTIGATION START
========================================== */

function startInvestigation() {

    /*
        ACT 1 will be loaded here.

        We will NOT create separate websites.

        Every chapter, character, evidence file,
        puzzle, audio, video and ending will
        exist inside this same application.
    */

    document.body.innerHTML = `
    
        <div class="investigation-start">

            <div class="case-loading">

                <div class="classification">
                    ACCESS GRANTED
                </div>

                <h1>CASE 0830</h1>

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
   ACT 1
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

                    No official investigation exists.

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
        document.querySelector(
            ".case-content"
        );

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
   CONTINUE
========================================== */

function continueInvestigation() {

    const content =
        document.querySelector(
            ".case-content"
        );

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
        document.querySelector(
            ".case-content"
        );

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
        document
        .getElementById(
            "evidence-answer"
        );

    const feedback =
        document
        .getElementById(
            "evidence-feedback"
        );

    const answer =
        input.value
        .trim()
        .toLowerCase();


    if (
        answer === "kael"
        ||
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
        document.querySelector(
            ".case-content"
        );

    content.innerHTML = `

        <div class="character-file">

            <div class="classification">
                PERSON OF INTEREST
            </div>

            <div class="character-layout">

                <div class="character-portrait">

    <img
        src="assets/characters/kael-vorn.jpg"
        alt="Kael Vorn"
        class="character-image"
    >

</div>

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
   NEXT STAGE
========================================== */

function continueAfterKael() {

    const content =
        document.querySelector(
            ".case-content"
        );

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
                onclick="showComingSoon()"
            >

                CONTINUE

            </button>

        </div>

    `;

}


/* ==========================================
   TEMPORARY END
========================================== */

function showComingSoon() {

    const content =
        document.querySelector(
            ".case-content"
        );

   function showComingSoon() {

    const content =
        document.querySelector(
            ".case-content"
        );

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
function openNightScene() {

    const content =
        document.querySelector(
            ".case-content"
        );

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
function answerPhone() {

    const content =
        document.querySelector(
            ".case-content"
        );

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
   <h2>
                INVESTIGATION CONTINUES.
            </h2>

            <p>
                More evidence is being recovered.
            </p>

            <p class="small-text">
                THIS IS ONLY THE BEGINNING.
            </p>

        </div>

    `;

}
/* ==========================================
   CHARACTER PORTRAIT SYSTEM
========================================== */

function characterPortrait(name, image, alt) {

    return `
${characterPortrait(
    "kael",
    "kael-vorn.jpg",
    "Kael Vorn"
)}
    `;

}

/* ==========================================
   START
========================================== */

runLoadingSequence();
function continueAfterCall() {      const content =         document.querySelector(".case-content");      content.innerHTML = `          <div class="crime-scene">              <div class="classification">                 EVIDENCE 002 // LOCATION             </div>              <h2>                 THE ROOM             </h2>              <p class="scene-location">                 VEYLORN // 02:31 AM             </p>              <div class="crime-room">                  <div class="room-light"></div>                  <div class="room-window">                     RAIN                 </div>                  <div class="room-chair">                     <span>CHAIR</span>                 </div>                  <div class="room-note">                     08 : 30                 </div>              </div>              <p class="scene-description">                  The room is empty.                  <br><br>                  But someone left one thing behind.              </p>              <button                 class="case-button"                 onclick="inspectNote()"             >                 INSPECT THE NOTE             </button>          </div>      `; }   function inspectNote() {      const content =         document.querySelector(".case-content");      content.innerHTML = `          <div class="evidence-screen">              <div class="classification">                 EVIDENCE 003 // PERSONAL NOTE             </div>              <h2>                 08 : 30             </h2>              <div class="evidence-paper">                  <p>                     If you're reading this,                     you found the room.                 </p>                  <p>                     Don't look for me.                 </p>                  <p>                     Look for the person                     who told you to stop.                 </p>                  <p>                     — V                 </p>              </div>              <p class="evidence-instruction">                 One question remains.             </p>              <button                 class="case-button"                 onclick="openFinalChoice()"             >                 CONTINUE             </button>          </div>      `; }   function openFinalChoice() {      const content =         document.querySelector(".case-content");      content.innerHTML = `          <div class="question-screen">              <div class="classification">                 INVESTIGATION DECISION             </div>              <h2>                 DO YOU KEEP LOOKING?             </h2>              <p>                 You have been warned twice.             </p>              <button                 class="case-button"                 onclick="finalReveal()"             >                 YES. I KEEP LOOKING.             </button>          </div>      `; }   function finalReveal() {      const content =         document.querySelector(".case-content");      content.innerHTML = `          <div class="revelation">              <div class="classification">                 CLASSIFIED // FINAL MESSAGE             </div>              <h2>                 YOU WERE NEVER                 THE INVESTIGATOR.             </h2>              <div class="divider"></div>              <p>                 Veyra didn't leave the clues                 for the police.             </p>              <p>                 She left them for                 <strong>you.</strong>             </p>              <br>              <p class="small-text">                 CASE 0830 — CONTINUED             </p>          </div>      `; }

    const content =
        document.querySelector(
            ".case-content"
        );

    content.innerHTML = `

        <div class="revelation">

            <div class="classification">
                NEW EVIDENCE
            </div>

            <h2>
                LOCATION FOUND.
            </h2>

            <p>
                The call came from somewhere
                inside Veylorn.
            </p>

            <div class="divider"></div>

            <p class="small-text">
                EVIDENCE 002 UNLOCKED
            </p>

        </div>

    `;

}
