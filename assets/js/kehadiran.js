
  const statsData = {
    july: { hadir: 20, sakit: 2, izin: 0, alfa: 0 },
    august: { hadir: 16, sakit: 2, izin: 2, alfa: 0 },
    september: { hadir: 20, sakit: 2, izin: 2, alfa: 0 }
  };

  const buttons = document.querySelectorAll('.month-btn');
  const counters = {
    hadir: document.getElementById('hadir'),
    sakit: document.getElementById('sakit'),
    izin: document.getElementById('izin'),
    alfa: document.getElementById('alfa')
  };

  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.backgroundColor = '#333533';
      btn.style.color = '#ffffff';
    });
    btn.addEventListener('mouseleave', () => {
      if (btn.classList.contains('active')) {
        btn.style.backgroundColor = '#2C2E2C';
        btn.style.color = '#ffffff';
        btn.style.border = '1px solid #555';
      } else {
        btn.style.backgroundColor = '#1E1F1E';
        btn.style.color = '#e2e2e2';
        btn.style.border = '1px solid #444';
      }
    });

    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('active');
        b.style.backgroundColor = '#1E1F1E';
        b.style.color = '#e2e2e2';
        b.style.border = '1px solid #444';
      });
      btn.classList.add('active');
      btn.style.backgroundColor = '#2C2E2C';
      btn.style.color = '#ffffff';
      btn.style.border = '1px solid #555';

      const month = btn.getAttribute('data-month');
      const data = statsData[month];

      for (let key in counters) {
        counters[key].setAttribute('data-purecounter-start', counters[key].innerText);
        counters[key].setAttribute('data-purecounter-end', data[key]);
      }

      new PureCounter();
    });
  });
