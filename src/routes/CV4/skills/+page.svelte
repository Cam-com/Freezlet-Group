<h1 class="text-3xl font-bold text-gray-800 p-4 uppercase tracking-widest">
    Skills </h1> <br>
<div class="bg-gray-800 text-white p-4">
    <h1 class="text-white p-4 uppercase tracking-widest text-lg font-bold">My Skills progress-bar</h1>
    <style>
        /* Styling for the list */
        ul {
            list-style: none;
            padding: 0;
        }

        /* Styling for the list items */
        li {
            margin-bottom: 10px;
        }

        /* Styling for the progress bar container */
        .progress-bar {
            background-color: #f0f0f0;
            border-radius: 5px;
            height: 20px;
            margin-top: 5px;
            overflow: hidden;
        }

        /* Styling for the progress bar */
        .progress {
            background-color: #4caf50;
            height: 100%;
            transition: width 0.6s ease;
            width: 0;
        }
    </style>
    <ul>
        <li>
            <h1 class="text-gray-200 text-sm font-semibold tracking-wider">Microsoft Excel:</h1>
            <div class="progress-bar">
                <div class="progress" style="width: 90%;"></div>
            </div>
        </li>
        <li>
            <h1 class="text-gray-200 text-sm font-semibold tracking-wider">Microsoft PowerPoint:</h1>
            <div class="progress-bar">
                <div class="progress" style="width: 70%;"></div>
            </div>
        </li>
        <li>
            <h1 class="text-gray-200 text-sm font-semibold tracking-wider">Power BI:</h1>
            <div class="progress-bar">
                <div class="progress" style="width: 60%;"></div>
            </div>
        </li>
        <li>
            <h1 class="text-gray-200 text-sm font-semibold tracking-wider">HTML:</h1>
            <div class="progress-bar">
                <div class="progress" style="width: 30%;"></div>
            </div>
        </li>
        <li>
            <h1 class="text-gray-200 text-sm font-semibold tracking-wider">CSS:</h1>
            <div class="progress-bar">
                <div class="progress" style="width: 25%;"></div>
            </div>
        </li>
        <li>
            <h1 class="text-gray-200 text-sm font-semibold tracking-wider">Java:</h1>
            <div class="progress-bar">
                <div class="progress" style="width: 15%;"></div>
            </div>
        </li>
    </ul>
</div>
<a href="src/routes/CV4/+page.svelte">Home</a>