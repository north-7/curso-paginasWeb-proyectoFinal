window.addEventListener("load", () => {
    document.getElementById("form-message")
        .addEventListener('submit', handleSubmitGetFormData); 
});

const handleSubmitGetFormData = e => {
    e.preventDefault();

    var element = document.getElementById('form-alert');
    var wrapper = document.getElementById('sections-wrapper');
    var form = document.getElementById("form-message");
    var fields = [...form.elements];
    
    const popAlert = () => {
        if(element) return;
        var section = document.createElement('section');
        var alert = document.createElement('div');
        section.id = "form-alert";
        section.className = "col";
        alert.className = "alert alert-danger text-center";
        alert.innerHTML = "¡Todos los campos son obligatórios!";
        section.appendChild(alert);
        wrapper.insertBefore(section, wrapper.firstChild);
    };
    
    const cleanAlert = () => {
        if(!element) return;
        wrapper.removeChild(element);
    };

    fields.pop();
    if(fields.find( e => e.value.trim() === '' || e.value === null)) {
        return popAlert();
    } else {
        cleanAlert();
    }
    var user = fields[0].value;
    alert(`Se ha enviado su mensaje, ${user}`);
    fields[0].value = "";
    fields[1].value = ""
    fields[2].value = "";
};
