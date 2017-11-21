# Stortverkefni2
Hópverkefni í vefforritun sem Rao13, hgg26 og spe3 gerðum saman.
* Rafnar(Rao13) 2.ár í tölvunarfræði
* Helgi(hgg26) 2.ár í tölvunarfræði
* Sigursteinn(spe3) 1.ár í tölvunarfræði

Má sjá að við notum sama fetch fall í bæði script.js og videos.js.

Síðan byrjar á því að hlaða upp myndbönd úr JSON skjalinu og býr til vefsíðuna útfrá id úr videos.json.
script.js teiknar upp listana, og þegar smellt er á myndband þá tekur við videos.js og hægt er að fara tilbaka í uppahafsmyndina með tilbaka takkanum.

Við notum Scss til þess að stíla verkefnið.  
frontpage.scss stílar listann okkar,  
video.scss stílar myndböndin okkar.  
errorMsg stílar villumeldingar sem gætu komið upp hjá okkur.  

video.js notar fetch til að sækja gögn úr json skjalinu, hvert event listener kallar á fall sem framkvæmir breytingu á myndbandinu.

script.js notar fetch til að sækja gögn úr json skjalinu, þar heldur það áfram í fall sem heitir runTheWorld. Þar notum við map inn í map sem keyrir og teiknar fyrir okkur listann.
