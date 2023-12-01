const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const write = document.getElementById('rates');



one.addEventListener('click', function(){
    one.classList.toggle('active');
    document.getElementById('submit').addEventListener('click', function(){
        document.getElementById('second').style.display = 'flex';
        write.innerHTML = '1'
    })
})

two.addEventListener('click', function(){
    two.classList.toggle('active');
    document.getElementById('submit').addEventListener('click', function(){
        document.getElementById('second').style.display = 'flex';
        write.innerHTML = '2'
    })
})

three.addEventListener('click', function(){
    three.classList.toggle('active');
    document.getElementById('submit').addEventListener('click', function(){
        document.getElementById('second').style.display = 'flex';
        write.innerHTML = '3'
    })
})

four.addEventListener('click', function(){
    four.classList.toggle('active');
    document.getElementById('submit').addEventListener('click', function(){
        document.getElementById('second').style.display = 'flex';
        write.innerHTML = '4'
    })
})


five.addEventListener('click', function(){
    five.classList.toggle('active');
    document.getElementById('submit').addEventListener('click', function(){
        document.getElementById('second').style.display = 'flex';
        write.innerHTML = '5'
    })
})



