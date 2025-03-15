let activity = [
  "Go for a run",
  "Read a book",
  "Watch a documentary",
  "Cook a new recipe",
  "Try a new hobby",
  "Visit a museum",
  "Learn a new skill",
];
function addActivity() {
  const newActivity = document.getElementById("activityInput").value.trim();
  if (newActivity != "") activity.push(newActivity);
  document.getElementById("activityInput").value = "";
}

function selectRandomActivity() {
  const randomIndex = Math.floor(Math.random() * activity.length);
  document.getElementById("Result").innerHTML = activity[randomIndex];
}
