Hetzner, der größte und bekannteste Deutsche Server Provider, hat seine Preise verdoppelt. Also baue ich mir jetzt meinen eigenen Server.

Hetzner ist ein welbekannter Server Hosting anbieter. Selbst in den USA wurde er oft empfohlen als eine gute und günstige alternative zu Hyperscalern wie AWS, Azure und GCP.
Jetzt spürt aber auch Hetzner die stark gestiegenen Preise für Computer Komponenten.
32 GB DDR5 RAM haben vor 9 Monaten noch unter 100€ gekostet. Innerhalb von 4 Monaten ist der Preis für das selbe Kit auf über 400€ angestiegen. Auch SSD Storage hat sich innerhalb von 4 Monaten fast verdreifacht. Von 50€ für 1TB NVME SSD auf 150€.
Nicht zu vergessen sind natürlich auch die Kosten für Energie. Hier haben wir in Deutschland besonders große Probleme, da wir Kernkraft abgeschafft haben und gleichzeitig viel den ausbau der Erneuerbaren Subventionieren.

Ich habe jetzt einfach enorm Lust mich mehr mit Infrastrucktur und Server Hardware zu beschäftigen. Also habe ich mir ein paar neue PC Komponenten gekauft und konvertiere damit dann meinen 8 Jahre alten Gaming PC in einen Server.

Hier sind meine Specs:
Intel i5 6600K 4  (4 Cores)
4x8GB DDR4 RAM
2x 250GB Sata SSD (RAID 1)
3x 2TB HDD (RAID Z1)
2x 1GB Intel Network Card

Darauf laufen dann:
Proxmoxx ist der Hypervisor für die VMs
OpnSense als Home Router und Networking
Dockploy für Public Facing Web Applicationen
SeaFile als Backup und File Storage für mich und meine Freunde
