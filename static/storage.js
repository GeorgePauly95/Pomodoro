fetch('/check').then(output => output.json()).then(final_output => { document.getElementById("pomodoro-length").value = final_output.pomodoro_length; document.getElementById("time").innerText = `${final_output.pomodoro_length}:00`; });
fetch('/check').then(output => output.json()).then(final_output => (document.getElementById("short-break-length").value = final_output.short_break_length));
fetch('/check').then(output => output.json()).then(final_output => (document.getElementById("long-break-length").value = final_output.long_break_length));
fetch('/check').then(output => output.json()).then(final_output => (document.getElementById("long-break-count").value = final_output.long_break_count));
