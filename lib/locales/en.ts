import { RomcalLocale } from '@romcal/models/locale/romcal-locale.type';

export default {
  advent: {
    season: 'Advent Season',
    weekday: '{{day}} of the {{week}} week of Advent',
    sunday: '{{week}} Sunday of Advent',
  },
  christmastide: {
    season: 'Christmas Season',
    day: '{{day}} of Christmastide',
    octave: '{{count}} Day within the Octave of the Nativity of the Lord',
    sunday: '{{count}} Sunday of Christmas',
  },
  epiphany: {
    season: 'Epiphany',
    before: '{{day}} before Epiphany',
    after: '{{day}} after Epiphany',
  },
  ordinary_time: {
    season: 'Ordinary Time',
    weekday: '{{day}} of the {{week}} week of Ordinary Time',
    sunday: '{{week}} Sunday in Ordinary Time',
  },
  lent: {
    season: 'Lenten Season',
    weekday: '{{day}} of the {{week}} week of Lent',
    sunday: '{{week}} Sunday of Lent',
    day_after_ash_wed: '{{day}} after Ash Wednesday',
  },
  holy_week: {
    season: 'Holy Week',
    weekday: '{{day}} of Holy Week',
  },
  paschal_triduum: {
    season: 'Paschal Triduum',
  },
  eastertide: {
    season: 'Easter Season',
    weekday: '{{day}} of the {{week}} week of Easter',
    sunday: '{{week}} Sunday of Easter',
    octave: '{{day}} within the Octave of Easter',
  },
  liturgical_colors: {
    BLACK: 'black',
    GOLD: 'gold',
    GREEN: 'green',
    PURPLE: 'purple',
    RED: 'red',
    ROSE: 'rose',
    WHITE: 'white',
  },
  ranks: {
    SOLEMNITY: 'solemnity',
    SUNDAY: 'Sunday',
    TRIDUUM: 'Triduum',
    HOLY_WEEK: 'Holy Week',
    FEAST: 'feast',
    MEMORIAL: 'memorial',
    OPT_MEMORIAL: 'optional memorial',
    COMMEMORATION: 'commemoration',
    WEEKDAY: 'weekday',
  },
  celebrations: {
    all_saints: 'All Saints',
    annunciation: 'Annunciation of the Lord',
    ascension: 'Ascension of the Lord',
    ash_wednesday: 'Ash Wednesday',
    assumption: 'Assumption of the Blessed Virgin Mary',
    baptism_of_the_lord: 'Baptism of the Lord',
    christ_the_king_sunday: 'Our Lord Jesus Christ, King of the Universe',
    christmas: 'Nativity of the Lord',
    corpus_christi: 'Most Holy Body and Blood of Christ',
    divine_mercy_sunday: 'Sunday of Divine Mercy',
    easter_sunday: 'Easter Sunday of the Resurrection of the Lord',
    epiphany: 'Epiphany of the Lord',
    exaltation_of_the_holy_cross: 'Exaltation of the Holy Cross',
    good_friday: 'Good Friday',
    holy_family: 'Holy Family of Jesus, Mary and Joseph',
    holy_saturday: 'Holy Saturday/Easter Vigil',
    holy_thursday: 'Holy Thursday',
    immaculate_conception_of_mary:
      'Immaculate Conception of the Blessed Virgin Mary',
    immaculate_heart_of_mary: 'Immaculate Heart of the Blessed Virgin Mary',
    joseph_spouse_of_mary: 'Saint Joseph, Spouse of the Blessed Virgin Mary',
    mary_mother_of_god: 'Mary, the Holy Mother of God',
    most_sacred_heart_of_jesus: 'Most Sacred Heart of Jesus',
    nativity_of_john_the_baptist: 'Nativity of Saint John the Baptist',
    palm_sunday: 'Palm Sunday of the Passion of the Lord',
    pentecost_sunday: 'Pentecost Sunday',
    peter_and_paul_apostles: 'Saints Peter and Paul, Apostles',
    presentation_of_the_lord: 'Presentation of the Lord',
    transfiguration: 'Transfiguration of the Lord',
    trinity_sunday: 'Most Holy Trinity',
    '205_blessed_martyrs_of_japan': '205 Blessed Martyrs of Japan',
    adalbert_of_prague_bishop: 'Saint Adalbert, Bishop and Martyr',
    adalbert_of_prague_bishop_patron_of_poland:
      'Saint Adalbert, Bishop, Martyr and Patron of Poland',
    adolph_kolping_priest: 'Blessed Adolph Kolping, Priest',
    aelred_of_rievaulx_abbot: 'Saint Aelred of Rievaulx, Abbot',
    aengus_of_tallaght_bishop: 'Saint Aengus, Bishop and Abbot',
    agatha_of_sicily_virgin: 'Saint Agatha, Virgin and Martyr',
    agnes_cao_guiying_martyr: 'Saint Agnes Cao Guiying, Martyr',
    agnes_of_bohemia_virgin: 'Saint Agnes of Bohemia, Virgin',
    agnes_of_rome_virgin: 'Saint Agnes, Virgin and Martyr',
    aidan_of_ferns_bishop: 'Saint Aidan, Bishop',
    aidan_of_lindisfarne_bishop:
      'Saint Aidan of Lindisfarne, Bishop and Missionary',
    aidan_of_lindisfarne_bishop_and_the_saints_of_lindisfarne:
      'Saint Aidan, Bishop, and the Saints of Lindisfarne',
    ailbe_of_emly_bishop: 'Saint Ailbe, Bishop',
    alban_of_britain_julius_of_caerleon_aaron_of_caerleon_martyrs:
      'Saints Alban, Julius and Aaron, Martyrs',
    alban_of_britain_martyr: 'Saint Alban, Martyr',
    alberic_crescitelli_priest: 'Saint Alberic Crescitelli, Priest and Martyr',
    albert_chmielowski_religious: 'Saint Albert Chmielowski, Religious',
    albert_the_great_bishop:
      'Saint Albert the Great, Bishop and Doctor of the Church',
    albertina_berkenbrock_virgin:
      'Blessed Albertina Berkenbrock, Virgin and Martyr',
    alberto_hurtado_priest: 'Saint Alberto Hurtado, Priest',
    all_saints_of_ireland: 'All Saints of Ireland',
    all_saints_of_wales: 'All Saints of Wales',
    all_souls: 'Commemoration of All the Faithful Departed',
    aloysius_gonzaga_religious: 'Saint Aloysius Gonzaga, Religious',
    aloysius_stepinac_bishop: 'Blessed Aloysius Stepinac, Bishop and Martyr',
    aloysius_versiglia_bishop_and_callistus_caravario_priest_martyrs:
      'Saints Aloysius Versiglia, Bishop and Callistus Caravario, Priest, Martyrs',
    alphonsa_of_the_immaculate_conception_muttathupadathu_virgin:
      'Saint Alphonsa of the Immaculate Conception Muttathupadathu, Virgin',
    alphonsus_liguori_bishop:
      'Saint Alphonsus Liguori, Bishop and Doctor of the Church',
    amand_of_maastricht_bishop: 'Saint Amand, Bishop',
    ambrose_of_milan_bishop: 'Saint Ambrose, Bishop and Doctor of the Church',
    andre_bessette_religious: 'Saint André Bessette, Religious',
    andre_grasset_priest: 'Blessed André Grasset, Priest and Martyr',
    andrew_apostle: 'Saint Andrew, Apostle',
    andrew_apostle_patron_of_russia:
      'Saint Andrew, Apostle and Patron of Russia',
    andrew_apostle_patron_of_scotland:
      'Saint Andrew, Apostle and Patron of Scotland',
    andrew_bobola_priest: 'Saint Andrew Bobola, Priest and Martyr',
    andrew_de_soveral_and_ambrose_francis_ferro_priests:
      'Saints Andrew de Soveral and Ambrose Francis Ferro, Priests and Martyrs',
    andrew_dung_lac_priest_and_companions_martyrs:
      'Saint Andrew Dũng-Lạc, Priest, and Companions, Martyrs',
    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs:
      'Saints Andrew Kim Tae-gŏn, Priest, Paul Chŏng Ha-sang and Companions, Martyrs',
    andrew_zorard_of_nitra_and_benedict_of_skalka_hermits:
      'Saints Andrew Zorard and Benedict, Hermits',
    angela_merici_virgin: 'Saint Angela Merici, Virgin',
    angela_salawa_virgin: 'Blessed Angela Salawa, Virgin',
    anno_of_cologne_bishop: 'Saint Anno of Cologne, Bishop',
    anselm_of_canterbury_bishop:
      'Saint Anselm, Bishop and Doctor of the Church',
    ansgar_of_hamburg_bishop: 'Saint Ansgar, Bishop',
    anthony_julian_nowowiejski_bishop_and_companions_martyrs:
      'Blessed Anthony Julian Nowowiejski, Bishop, and Companions, Martyrs',
    anthony_mary_claret_bishop: 'Saint Anthony Mary Claret, Bishop',
    anthony_of_egypt_abbot: 'Saint Anthony, Abbot',
    anthony_of_padua_priest:
      'Saint Anthony of Padua, Priest and Doctor of the Church',
    anthony_of_saint_anne_galvao_priest:
      'Saint Anthony of Saint Anne Galvão, Priest',
    anthony_of_the_caves_monk: 'Saint Anthony of the Caves, Monk',
    anthony_zaccaria_priest: 'Saint Anthony Zaccaria, Priest',
    apollinaris_of_ravenna_bishop: 'Saint Apollinaris, Bishop and Martyr',
    asaph_of_wales_bishop: 'Saint Asaph, Bishop',
    asicus_of_elphin_bishop: 'Saint Asicus, Bishop',
    athanasius_of_alexandria_bishop:
      'Saint Athanasius, Bishop and Doctor of the Church',
    attracta_of_killaraght_virgin: 'Saint Attracta, Virgin',
    augustine_kazotic_bishop: 'Blessed Augustine Kažotić, Bishop and Martyr',
    augustine_of_canterbury_bishop: 'Saint Augustine of Canterbury, Bishop',
    augustine_of_hippo_bishop:
      'Saint Augustine, Bishop and Doctor of the Church',
    augustine_zhao_rong_priest: 'Saint Augustine Zhao Rong, Priest and Martyr',
    augustine_zhao_rong_priest_and_companions_martyrs:
      'Saint Augustine Zhao Rong, Priest, and Companions, Martyrs',
    barbara_of_heliopolis_virgin: 'Saint Barbara, Virgin and Martyr',
    barnabas_apostle: 'Saint Barnabas, Apostle',
    bartholomew_apostle: 'Saint Bartholomew, Apostle',
    bartholomew_dias_laurel_religious:
      'Blessed Bartholomew Días Laurel, Religious and Martyr',
    bartholomew_of_the_martyrs_fernandes_bishop:
      'Saint Bartholomew of the Martyrs Fernandes, Bishop',
    basil_the_great_and_gregory_nazianzen_bishops:
      'Saints Basil the Great and Gregory Nazianzen, Bishops and Doctors of the Church',
    beatrice_da_silva_meneses_virgin: 'Saint Beatrice da Silva Meneses, Virgin',
    bede_the_venerable_priest:
      'Saint Bede the Venerable, Priest and Doctor of the Church',
    benedict_of_jesus_valdivielso_saez_religious:
      'Saint Benedict of Jesus Valdivielso Sáez, Religious and Martyr',
    benedict_of_nursia_abbot: 'Saint Benedict, Abbot',
    benedict_of_nursia_abbot_patron_of_europe:
      'Saint Benedict, Abbot and Patron of Europe',
    benno_of_meissen_bishop: 'Saint Benno of Meissen, Bishop',
    bernadette_soubirous_virgin: 'Saint Bernadette Soubirous, Virgin',
    bernard_of_clairvaux_abbot: 'Saint Bernard, Abbot and Doctor of the Church',
    bernardine_of_siena_priest: 'Saint Bernardine of Siena, Priest',
    beuno_of_wales_abbot: 'Saint Beuno, Abbot',
    blaise_of_sebaste_bishop: 'Saint Blaise, Bishop and Martyr',
    bogumilus_of_dobrow_bishop: 'Blessed Bogumilus, Bishop',
    boleslawa_mary_lament_virgin: 'Blessed Boleslawa Mary Lament, Virgin',
    bonaventure_of_bagnoregio_bishop:
      'Saint Bonaventure, Bishop and Doctor of the Church',
    boniface_of_mainz_bishop: 'Saint Boniface, Bishop and Martyr',
    boris_of_kiev_and_gleb_of_kiev_martyrs: 'Saints Boris and Gleb, Martyrs',
    brendan_of_clonfert_abbot: 'Saint Brendan, Abbot',
    bridget_of_sweden_religious: 'Saint Bridget, Religious',
    bridget_of_sweden_religious_copatroness_of_europe:
      'Saint Bridget, Religious and Copatroness of Europe',
    brigid_of_kildare_virgin_copatroness_of_ireland:
      'Saint Brigid, Virgin and Copatroness of Ireland',
    bronislava_of_poland_virgin: 'Blessed Bronislava, Virgin',
    bronislaw_markiewicz_priest: 'Blessed Bronisław Markiewicz, Priest',
    bruno_of_cologne_priest: 'Saint Bruno, Priest',
    bruno_of_querfurt_bishop: 'Saint Bruno of Querfurt, Bishop And Martyr',
    caesarius_of_arles_bishop: 'Saint Caesarius of Arles, Bishop',
    cajetan_of_thiene_priest: 'Saint Cajetan, Priest',
    callistus_i_pope: 'Saint Callistus I, Pope and Martyr',
    camillus_de_lellis_priest: 'Saint Camillus de Lellis, Priest',
    canice_of_kilkenny_abbot: 'Saint Canice, Abbot',
    canute_iv_of_denmark_eric_ix_of_sweden_and_olaf_ii_of_norway_martyrs:
      'Saints Canute, Eric and Olaf, Martyrs',
    canute_iv_of_denmark_martyr: 'Saint Canute, Martyr',
    carlos_manuel_rodriguez_santiago:
      'Blessed Carlos Manuel Rodríguez Santiago',
    caroline_kozka_virgin: 'Blessed Caroline Kózka, Virgin and Martyr',
    carthage_of_lismore_bishop: 'Saint Carthage, Bishop',
    casimir_of_poland: 'Saint Casimir',
    catherine_of_alexandria_virgin:
      'Saint Catherine of Alexandria, Virgin and Martyr',
    catherine_of_saint_augustine_de_simon_de_longpre_virgin:
      'Blessed Catherine of Saint Augustine, Virgin',
    catherine_of_siena_virgin:
      'Saint Catherine of Siena, Virgin and Doctor of the Church',
    catherine_of_siena_virgin_copatroness_of_europe:
      'Saint Catherine of Siena, Virgin, Doctor of the Church and Copatroness of Europe',
    catherine_of_siena_virgin_copatroness_of_italy_and_europe:
      'Saint Catherine of Siena, Virgin, Doctor of the Church and Copatroness of Italy and Europe',
    ceallach_of_armagh_bishop: 'Saint Ceallach, Bishop',
    cecilia_of_rome_virgin: 'Saint Cecilia, Virgin and Martyr',
    ceferino_gimenez_malla_martyr: 'Blessed Ceferino Giménez Malla, Martyr',
    ceslaus_of_poland_and_hyacinth_of_poland_priests:
      'Blessed Ceslaus and Saint Hyacinth, Priests',
    ceslaus_of_poland_priest: 'Blessed Ceslaus, Priest',
    chad_of_mercia_and_cedd_of_lastingham_bishops:
      'Saints Chad and Cedd, Bishops',
    chair_of_saint_peter_the_apostle: 'Chair of Saint Peter the Apostle',
    charles_borromeo_bishop: 'Saint Charles Borromeo, Bishop',
    charles_i_of_austria: 'Blessed Charles of Austria',
    charles_lwanga_and_companions_martyrs:
      'Saints Charles Lwanga and Companions, Martyrs',
    charles_spinola_and_jerome_de_angelis_priests:
      'Blesseds Charles Spinola and Jerome de Angelis, Priests and Martyrs',
    charles_spinola_priest: 'Blessed Charles Spinola, Priest and Martyr',
    christopher_magallanes_priest_and_companions_martyrs:
      'Saint Christopher Magallanes, Priest, and Companions, Martyrs',
    christopher_of_palestine_martyr: 'Saint Christopher, Martyr',
    ciaran_of_clonmacnoise_abbot: 'Saint Ciaran, Abbot',
    clare_of_assisi_virgin: 'Saint Clare, Virgin',
    clement_i_pope: 'Saint Clement I, Pope and Martyr',
    clement_mary_hofbauer_priest: 'Saint Clement Mary Hofbauer, Priest',
    clement_of_ohrid_and_gorazd_of_moravia_bishops_and_companions:
      'Saints Clement of Ohrid and Gorazd, Bishops, and Companions',
    clotilde_of_burgundy: 'Saint Clotilde',
    colman_of_cloyne_bishop: 'Saint Colman of Cloyne, Bishop',
    colman_of_dromore_bishop: 'Saint Colman of Dromore, Bishop',
    colman_of_kilmacduagh_bishop: 'Saint Colman of Kilmacduagh, Bishop',
    columba_marmion_priest: 'Blessed Columba Marmion, Priest',
    columba_of_iona_abbot: 'Saint Columba, Abbot',
    columba_of_iona_abbot_copatron_of_ireland:
      'Saint Columba, Abbot, Missionary and Copatron of Ireland',
    columban_of_luxeuil_abbot: 'Saint Columban, Abbot',
    comgall_of_bangor_abbot: 'Saint Comgall, Abbot',
    conleth_of_kildare_bishop: 'Saint Conleth, Bishop',
    conrad_of_constance_and_gebhard_of_constance_bishops:
      'Saints Conrad and Gebhard of Constance, Bishops',
    conrad_of_parzham_religious: 'Saint Conrad of Parzham, Religious',
    conversion_of_saint_paul_the_apostle:
      'Conversion of Saint Paul the Apostle',
    corbinian_of_freising_bishop: 'Saint Corbinian, Bishop',
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs:
      'Saints Cornelius, Pope, and Cyprian, Bishop, Martyrs',
    cosmas_of_cilicia_and_damian_of_cilicia_martyrs:
      'Saints Cosmas and Damian, Martyrs',
    cuthbert_of_lindisfarne_bishop: 'Saint Cuthbert, Bishop',
    cyril_of_alexandria_bishop:
      'Saint Cyril of Alexandria, Bishop and Doctor of the Church',
    cyril_of_jerusalem_bishop:
      'Saint Cyril of Jerusalem, Bishop and Doctor of the Church',
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop:
      'Saints Cyril, Monk, and Methodius, Bishop',
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe:
      'Saints Cyril, Monk, and Methodius, Bishop, Copatrons of Europe',
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_slavic_missionaries:
      'Saints Cyril and Methodius, Slavic Missionaries',
    damasus_i_pope: 'Saint Damasus I, Pope',
    damien_de_veuster_priest: 'Saint Damien de Veuster, Priest',
    david_lewis_priest: 'Saint David Lewis, Priest and Martyr',
    david_of_wales_bishop: 'Saint David, Bishop',
    david_of_wales_bishop_patron_of_wales:
      'Saint David, Bishop and Patron of Wales',
    davnet_of_sliabh_beagh_virgin: 'Saint Davnet, Virgin',
    declan_of_ardmore_bishop: 'Saint Declan, Bishop',
    dedication_of_consecrated_churches:
      'Dedication of Consecrated Churches whose date of Consecration is unknown',
    dedication_of_the_basilica_of_saint_mary_major:
      'Dedication of the Basilica of Saint Mary Major',
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles:
      'Dedication of the Basilicas of Saints Peter and Paul, Apostles',
    dedication_of_the_lateran_basilica: 'Dedication of the Lateran Basilica',
    deiniol_of_bangor_bishop: 'Saint Deiniol, Bishop',
    demetrius_of_thessaloniki_martyr: 'Saint Demetrius of Thessaloniki, Martyr',
    denis_of_paris_bishop_and_companions_martyrs:
      'Saint Denis, Bishop, and Companions, Martyrs',
    dina_belanger_virgin: 'Blessed Dina Bélanger, Virgin',
    dionysius_the_areopagite_bishop:
      'Saint Dionysius the Areopagite, Bishop and Martyr',
    dominic_de_guzman_priest: 'Saint Dominic, Priest',
    dominic_of_the_mother_of_god_barberi_priest:
      'Blessed Dominic of the Mother of God Barberi, Priest',
    dunstan_of_canterbury_bishop: 'Saint Dunstan, Bishop',
    dyfrig_of_wales_bishop: 'Saint Dyfrig, Bishop',
    edmund_bojanowski: 'Blessed Edmund Bojanowski',
    edmund_campion_priest: 'Saint Edmund Campion, Priest and Martyr',
    edmund_ignatius_rice_religious: 'Blessed Edmund Rice, Religious',
    edmund_of_abingdon_bishop: 'Saint Edmund of Abingdon, Bishop',
    edward_the_confessor: 'Saint Edward the Confessor',
    elijah_prophet: 'Saint Elijah, prophet',
    elizabeth_ann_seton_religious: 'Saint Elizabeth Ann Seton, Religious',
    elizabeth_hesselblad_religious: 'Saint Elizabeth Hesselblad, Religious',
    elizabeth_of_hungary_religious: 'Saint Elizabeth of Hungary, Religious',
    elizabeth_of_portugal: 'Saint Elizabeth of Portugal',
    emeric_of_hungary: 'Saint Emeric',
    emilie_tavernier_gamelin_religious:
      'Blessed Émilie Tavernier-Gamelin, Religious',
    enda_of_aran_abbot: 'Saint Enda, Abbot',
    english_martyrs: 'English Martyrs',
    eoghan_of_ardstraw_bishop: 'Saint Eoghan, Bishop',
    ephrem_the_syrian_deacon: 'Saint Ephrem, Deacon and Doctor of the Church',
    eric_ix_of_sweden_martyr: 'Saint Eric IX of Sweden, Martyr',
    etheldreda_of_ely_abbess: 'Saint Etheldreda, Abbess',
    eugene_de_mazenod_bishop: 'Saint Eugène de Mazenod, Bishop',
    eulalia_of_merida_virgin: 'Saint Eulalia of Merida, Virgin and Martyr',
    eulogius_of_cordoba_bishop: 'Saint Eulogius of Córdoba, Bishop',
    eusebius_of_esztergom_priest: 'Blessed Eusebius of Esztergom, Priest',
    eusebius_of_vercelli_bishop: 'Saint Eusebius of Vercelli, Bishop',
    eysteinn_of_nidaros_bishop: 'Saint Eysteinn of Nidaros, Bishop',
    ezequiel_moreno_bishop: 'Saint Ezequiel Moreno, Bishop',
    fabian_i_pope: 'Saint Fabian, Pope and Martyr',
    fachanan_of_kilfenora_bishop: 'Saint Fachanan, Bishop',
    fachtna_of_rosscarbery_bishop: 'Saint Fachtna, Bishop',
    faustina_kowalska_virgin: 'Saint Faustina Kowalska, Virgin',
    ferdinand_iii_of_castile: 'Saint Ferdinand III of Castile',
    fiacre_of_breuil_monk: 'Saint Fiacre, Monk',
    fidelis_of_sigmaringen_priest:
      'Saint Fidelis of Sigmaringen, Priest and Martyr',
    finbarr_of_cork_bishop: 'Saint Finbarr, Bishop',
    finding_of_the_holy_cross: 'Finding of the Holy Cross',
    finnian_of_clonard_bishop: 'Saint Finian, Bishop',
    fintan_of_clonenagh_abbot: 'Saint Fintan, Abbot',
    first_martyrs_of_the_holy_roman_church:
      'First Martyrs of the Holy Roman Church',
    first_polish_martyrs:
      'Saints Benedict, John, Matthew, Isaac and Christian, the First Polish Martyrs',
    five_wounds_of_the_lord: 'Five Wounds of the Lord',
    flannan_of_killaloe_bishop: 'Saint Flannan, Bishop',
    florian_of_lorch_and_companions_martyrs:
      'Saint Florian and Companions, Martyrs',
    florian_of_lorch_martyr: 'Saint Florian, Martyr',
    frances_of_rome_religious: 'Saint Frances of Rome, Religious',
    frances_xavier_cabrini_virgin: 'Saint Frances Xavier Cabrini, Virgin',
    francis_borgia_priest: 'Saint Francis Borgia, Priest',
    francis_de_sales_bishop:
      'Saint Francis de Sales, Bishop and Doctor of the Church',
    francis_diaz_del_rincon_priest_and_companions_martyrs:
      'Saint Francis Díaz del Rincon, Priest, and Companions, Martyrs',
    francis_ferdinand_de_capillas_priest:
      'Saint Francis Ferdinand de Capillas, Priest and Martyr',
    francis_of_assisi: 'Saint Francis of Assisi',
    francis_of_assisi_patron_of_italy:
      'Saint Francis of Assisi, Patron of Italy',
    francis_of_paola_hermit: 'Saint Francis of Paola, Hermit',
    francis_solanus_priest: 'Saint Francis Solanus, Priest',
    francis_xavier_priest: 'Saint Francis Xavier, Priest',
    francis_xavier_seelos_priest: 'Blessed Francis Xavier Seelos, priest',
    francois_de_montmorency_laval_bishop: 'Saint François de Laval, Bishop',
    frederic_janssoone_priest: 'Blessed Frédéric Janssoone, Priest',
    fridolin_of_sackingen_monk: 'Saint Fridolin of Säckingen, Monk',
    fructuosus_of_braga_martin_of_braga_and_gerald_of_braga_bishops:
      'Saints Fructuosus, Martin and Gerald of Braga, Bishops',
    fructuosus_of_tarragona_bishop_and_augurius_of_tarragona_and_eulogius_of_tarragona_deacons_martyrs:
      'Saints Fructuosus, Bishop, Augurius and Eulogius, Deacons, Martyrs',
    fursa_of_peronne_abbot: 'Saint Fursa, Abbot and Missionary',
    gabriel_taurin_dufresse_bishop:
      'Saint Gabriel-Taurin Dufresse, Bishop and Martyr',
    gall_of_switzerland_abbot: 'Saint Gall, Abbot and Missionary',
    genevieve_of_paris_virgin: 'Saint Genevieve, Virgin',
    george_matulaitis_bishop: 'Blessed George Matulaitis, Bishop',
    george_of_lydda_martyr: 'Saint George, Martyr',
    george_of_lydda_martyr_patron_of_england:
      'Saint George, Martyr and Patron of England',
    george_preca_priest: 'Saint George Preca, Priest',
    gerard_of_csanad_bishop: 'Saint Gerard of Csanád, Bishop and Martyr',
    germanus_of_auxerre_bishop: 'Saint Germanus of Auxerre, Bishop',
    gertrude_of_nivelles_abbess: 'Saint Gertrude of Nivelles, Abbess',
    gertrude_the_great_virgin: 'Saint Gertrude, Virgin',
    gisela_of_hungary: 'Blessed Gisela',
    gobnait_of_ballyvourney_virgin: 'Saint Gobnait, Virgin',
    gorazd_of_moravia_and_companions: 'Saint Gorazd and Companions',
    gotthard_of_hildesheim_bishop: 'Saint Gotthard, Bishop',
    gratia_of_cattaro_religious: 'Blessed Gratia of Cattaro, Religious',
    gregory_grassi_francis_fogolla_and_anthony_fantosati_bishops_and_companions_martyrs:
      'Saints Gregory Grassi, Francis Fogolla and Anthony Fantosati, Bishops, and Companions, Martyrs',
    gregory_i_the_great_pope:
      'Saint Gregory the Great, Pope and Doctor of the Church',
    gregory_of_narek_abbot:
      'Saint Gregory of Narek, Abbot and Doctor of the Church',
    gregory_vii_pope: 'Saint Gregory VII, Pope',
    guardian_angel_of_portugal: 'Guardian Angel of Portugal',
    guardian_angels: 'Holy Guardian Angels',
    gundisalvus_garcia_martyr: 'Saint Gundisalvus Garcia, Martyr',
    gundisalvus_of_amarante_priest: 'Blessed Gundisalvus of Amarante, Priest',
    gundisalvus_of_lagos_priest: 'Blessed Gundisalvus of Lagos, Priest',
    hedwig_of_poland: 'Saint Hedwig of Poland',
    hedwig_of_silesia_religious: 'Saint Hedwig, Religious',
    helena_of_constantinople: 'Saint Helena',
    hemma_of_gurk: 'Saint Hemma of Gurk',
    hemming_of_turku_bishop: 'Blessed Hemming of Turku, Bishop',
    henry_ii_emperor: 'Saint Henry',
    henry_ii_emperor_and_cunigunde_of_luxembourg: 'Saints Henry and Cunigunde',
    henry_of_finland_bishop: 'Saint Henry, Bishop and Martyr',
    henry_suso_priest: 'Blessed Henry Suso, Priest',
    hermann_joseph_of_steinfeld_priest: 'Saint Hermann Joseph, Priest',
    hermenegild_the_visigoths_martyr: 'Saint Hermenegild, Martyr',
    hilary_of_poitiers_bishop: 'Saint Hilary, Bishop and Doctor of the Church',
    hilda_of_whitby_abbess: 'Saint Hilda, Abbess',
    hildegard_of_bingen_abbess:
      'Saint Hildegard of Bingen, Abbess and Doctor of the Church',
    holy_child_of_cebu: 'Holy Child of Cebú',
    holy_innocents_martyrs: 'Holy Innocents, Martyrs',
    honorat_kozminski_priest: 'Blessed Honorat Koźmiński, Priest',
    hosanna_of_cattaro_virgin: 'Blessed Hosanna of Cattaro, Virgin',
    hroznata_of_bohemia_martyr: 'Blessed Hroznata, Martyr',
    hubert_of_liege_bishop: 'Saint Hubert, Bishop',
    hugh_of_lincoln_bishop: 'Saint Hugh of Lincoln, Bishop',
    hungarian_saints_and_blesseds: 'Hungarian Saints and Blesseds',
    hyacinth_of_poland_priest: 'Saint Hyacinth, Priest',
    ignatius_de_azevedo_priest_and_companions_martyrs:
      'Blessed Ignatius de Azevedo, Priest, and Companions, Martyrs',
    ignatius_falzon: 'Blessed Ignatius Falzon',
    ignatius_of_antioch_bishop: 'Saint Ignatius of Antioch, Bishop and Martyr',
    ignatius_of_loyola_priest: 'Saint Ignatius of Loyola, Priest',
    ildephonsus_of_toledo_bishop: 'Saint Ildephonsus of Toledo, Bishop',
    illtud_the_knight_abbot: 'Saint Illtud, Abbot',
    immaculate_conception_of_mary_patroness_of_the_philippines:
      'Immaculate Conception of the Blessed Virgin Mary, Patroness of the Philippines',
    immaculate_conception_of_mary_patroness_of_the_usa:
      'Immaculate Conception of the Blessed Virgin Mary, Patroness of the USA',
    innocent_xi_pope: 'Blessed Innocent XI, Pope',
    irenaeus_of_lyon_bishop: 'Saint Irenaeus, Bishop and Martyr',
    irene_of_macedonia: 'Saint Irene',
    irish_martyrs: 'Irish Martyrs',
    isidore_of_seville_bishop: 'Saint Isidore, Bishop and Doctor of the Church',
    isidore_the_farmer: 'Saint Isidore',
    istvan_sandor_religious: 'Blessed István Sándor, Religious and Martyr',
    ita_of_killeedy_virgin: 'Saint Ita, Virgin',
    ivan_merz: 'Blessed Ivan Merz',
    ivo_of_kermartin_priest: 'Saint Ivo, Priest',
    jacinta_marto_and_francisco_marto: 'Saints Jacinta and Francisco Marto',
    james_apostle: 'Saint James, Apostle',
    james_apostle_patron_of_spain: 'Saint James, Apostle and Patron of Spain',
    james_strzemie_bishop: 'Blessed James Strzemię, Bishop',
    jane_frances_de_chantal_religious:
      'Saint Jane Frances de Chantal, Religious',
    januarius_i_of_benevento_bishop: 'Saint Januarius, Bishop and Martyr',
    jarlath_of_tuam_bishop: 'Saint Jarlath, Bishop',
    jerome_emiliani: 'Saint Jerome Emiliani',
    jerome_of_stridon_priest: 'Saint Jerome, Priest and Doctor of the Church',
    joachim_and_anne_parents_of_mary:
      'Saints Joachim and Anne, Parents of the Blessed Virgin Mary',
    joachim_and_anne_patroness_of_the_province_of_quebec_parents_of_mary:
      'Saints Anne, Patroness of the Province of Quebec, and Joachim, Parents of the Blessed Virgin Mary',
    joachim_he_kaizhi_martyr: 'Saint Joachim He Kaizhi, Martyr',
    joan_of_arc_virgin_copatroness_of_france:
      'Saint Joan of Arc, Virgin, Copatroness of France',
    joan_of_portugal_virgin: 'Blessed Joan of Portugal, Virgin',
    joaquina_of_saint_francis_of_assisi_de_vedruna_religious:
      'Saint Joaquina of Saint Francis of Assisi de Vedruna, Religious',
    john_apostle: 'Saint John, Apostle and Evangelist',
    john_baptist_de_la_salle_priest: 'Saint John Baptist de la Salle, Priest',
    john_berchmans_religious: 'Saint John Berchmans, Religious',
    john_beyzym_priest: 'Blessed John Beyzym, Priest',
    john_bosco_priest: 'Saint John Bosco, Priest',
    john_brenner_priest: 'Blessed John Brenner, Priest and Martyr',
    john_cassian_priest: 'Saint John Cassian, Priest',
    john_chrysostom_bishop:
      'Saint John Chrysostom, Bishop and Doctor of the Church',
    john_damascene_priest:
      'Saint John Damascene, Priest and Doctor of the Church',
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs:
      'Saints John de Brébeuf and Isaac Jogues, Priests, and Companions, Martyrs',
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs_copatrons_of_canada:
      'Saints John de Brébeuf and Isaac Jogues, Priests, and Companions, Martyrs and Copatrons of Canada',
    john_de_britto_priest: 'Saint John de Brito, Priest and Martyr',
    john_eudes_priest: 'Saint John Eudes, Priest',
    john_fisher_bishop_and_thomas_more_martyrs:
      'Saints John Fisher, Bishop, and Thomas More, Martyrs',
    john_gabriel_perboyre_priest:
      'Saint John Gabriel Perboyre, Priest and Martyr',
    john_henry_newman_priest: 'Saint John Henry Newman, Priest',
    john_i_pope: 'Saint John I, Pope and Martyr',
    john_jones_priest: 'Saint John Jones, Priest and Martyr',
    john_leonardi_priest: 'Saint John Leonardi, Priest',
    john_macias_religious: 'Saint John Macías, Religious',
    john_martin_moye_priest: 'Blessed John Martin Moye, Priest',
    john_mary_vianney_priest: 'Saint John Vianney, Priest',
    john_nepomucene_neumann_bishop: 'Saint John Neumann, Bishop',
    john_nepomucene_priest: 'Saint John Nepomucene, Priest and Martyr',
    john_of_avila_priest:
      'Saint John of Ávila, Priest and Doctor of the Church',
    john_of_capistrano_priest: 'Saint John of Capistrano, Priest',
    john_of_dukla_priest: 'Saint John of Dukla, Priest',
    john_of_god_duoarte_cidade_religious: 'Saint John of God, Religious',
    john_of_kanty_priest: 'Saint John of Kanty, Priest',
    john_of_the_cross_priest:
      'Saint John of the Cross, Priest and Doctor of the Church',
    john_of_triora_priest: 'Saint John of Triora, Priest and Martyr',
    john_ogilvie_priest: 'Saint John Ogilvie, Priest and Martyr',
    john_paul_ii_pope: 'Saint John Paul II, Pope',
    john_roberts_priest: 'Saint John Roberts, Priest and Martyr',
    john_sarkander_priest: 'Saint John Sarkander, Priest and Martyr',
    john_scheffler_bishop: 'Blessed John Scheffler, Bishop and Martyr',
    john_xxiii_pope: 'Saint John XXIII, Pope',
    josaphat_kuntsevych_bishop: 'Saint Josaphat, Bishop and Martyr',
    jose_maria_de_yermo_y_parres_priest:
      'Saint José Maria de Yermo y Parres, Priest',
    josemaria_escriva_de_balaguer_priest:
      'Saint Josemaría Escrivá de Balaguer, Priest',
    joseph_bilczewski_bishop: 'Saint Joseph Bilczewski, Bishop',
    joseph_de_anchieta_priest: 'Saint Joseph de Anchieta, Priest',
    joseph_freinademetz_priest: 'Saint Joseph Freinademetz, Priest',
    joseph_of_calasanz_priest: 'Saint Joseph of Calasanz, Priest',
    joseph_sebastian_pelczar_bishop: 'Saint Joseph Sebastian Pelczar, Bishop',
    joseph_spouse_of_mary_patron_of_canada:
      'Saint Joseph, Spouse of the Blessed Virgin Mary and Patron of Canada',
    joseph_the_worker: 'Saint Joseph the Worker',
    joseph_vaz_priest: 'Saint Joseph Vaz, Priest',
    joseph_yuan_gengyin_priest: 'Saint Joseph Yuan Gengyin, Priest and Martyr',
    joseph_zhang_dapeng_martyr: 'Saint Joseph Zhang Dapeng, Martyr',
    josephine_bakhita_virgin: 'Saint Josephine Bakhita, Virgin',
    juan_diego_cuauhtlatoatzin: 'Saint Juan Diego Cuauhtlatoatzin',
    juliana_of_liege_virgin: 'Saint Juliana of Liège, Virgin',
    julie_billiart_virgin: 'Saint Julie Billiart, Virgin',
    junipero_serra_priest: 'Saint Junípero Serra, Priest',
    justin_martyr: 'Saint Justin, Martyr',
    kateri_tekakwitha_virgin: 'Saint Kateri Tekakwitha, Virgin',
    katharine_drexel_virgin: 'Saint Katharine Drexel, Virgin',
    kentigern_of_scotland_bishop: 'Saint Kentigern, Bishop',
    kevin_of_glendalough_abbot: 'Saint Kevin, Abbot',
    kieran_of_saigir_bishop: 'Saint Kieran, Bishop',
    kilian_of_wurzburg_bishop: 'Saint Kilian, Bishop and Martyr',
    kilian_of_wurzburg_bishop_and_companions_martyrs:
      'Saint Kilian, Bishop, and Companions, Martyrs',
    kinga_of_poland_virgin: 'Saint Kinga, Virgin',
    kuriakose_elias_of_the_holy_family_chavara_priest:
      'Saint Kuriakose Elias of the Holy Family Chavara, priest',
    ladislas_of_gielniow_priest: 'Blessed Ladislas of Gielniow, Priest',
    ladislaus_batthyany_strattmann: 'Blessed Ladislaus Batthyány-Strattmann',
    ladislaus_i_of_hungary: 'Saint Ladislaus',
    lambert_of_maastricht_bishop:
      'Saint Lambert of Maastricht, Bishop and Martyr',
    laserian_of_leighlin_bishop: 'Saint Laserian, Bishop',
    laura_vicuna_virgin: 'Blessed Laura Vicuña, Virgin',
    laurence_otoole_bishop: 'Saint Laurence O’Toole, Bishop',
    laurence_wang_bing_and_companions_martyrs:
      'Saint Laurence Wang Bing and Companions, Martyrs',
    lawrence_bai_xiaoman_martyr: 'Saint Lawrence Bai Xiaoman, Martyr',
    lawrence_of_brindisi_priest:
      'Saint Lawrence of Brindisi, Priest and Doctor of the Church',
    lawrence_of_rome_deacon: 'Saint Lawrence, Deacon and Martyr',
    lawrence_ruiz_and_companions_martyrs:
      'Saint Lawrence Ruiz and Companions, Martyrs',
    leander_of_seville_bishop: 'Saint Leander of Seville, Bishop',
    lelia_of_killeely_virgin: 'Saint Lelia, Virgin',
    leo_i_the_great_pope: 'Saint Leo the Great, Pope and Doctor of the Church',
    leo_ignatius_mangin_priest_and_companions_martyrs:
      'Saint Leo Ignatius Mangin, Priest, and Companions, Martyrs',
    leo_ix_pope: 'Saint Leo IX, Pope',
    leoba_of_tauberbischofsheim_abbess: 'Saint Leoba, Abbess',
    leonard_of_noblac_hermit: 'Saint Leonard of Noblac, Hermit',
    leonid_feodorov_priest: 'Blessed Leonid Feodorov, Priest and Martyr',
    leopold_iii_of_babenberg: 'Saint Leopold III of Babenberg',
    leopold_mandic_priest: 'Saint Leopold Mandić, Priest',
    louis_bertrand_priest: 'Saint Louis Bertrand, Priest',
    louis_grignion_de_montfort_priest:
      'Saint Louis Grignion de Montfort, Priest',
    louis_ix_of_france: 'Saint Louis',
    louis_zephirin_moreau_bishop: 'Blessed Louis-Zéphirin Moreau, Bishop',
    lucius_of_chur_bishop: 'Saint Lucius of Chur, Bishop and Martyr',
    lucy_of_syracuse_virgin: 'Saint Lucy, Virgin and Martyr',
    lucy_yi_zhenmei_virgin: 'Saint Lucy Yi Zhenmei, Virgin and Martyr',
    ludger_of_munster_bishop: 'Saint Ludger of Münster, Bishop',
    ludmila_of_bohemia_martyr: 'Saint Ludmila, Martyr',
    luigi_orione_priest: 'Saint Luigi Orione, Priest',
    luke_evangelist: 'Saint Luke, Evangelist',
    lydia_of_philippi: 'Saint Lydia of Philippi',
    mac_nissi_of_connor_bishop: 'Saint Mac Nissi, Bishop',
    macartan_of_clogher_bishop: 'Saint Macartan, Bishop',
    maelruain_of_tallaght_bishop: 'Saint Maelruain, Bishop and Abbot',
    magnus_erlendsson_martyr: 'Saint Magnus, Martyr',
    malachy_of_armagh_bishop: 'Saint Malachy, Bishop',
    marcel_callo_martyr: 'Blessed Marcel Callo, Martyr',
    marcelina_darowska_religious: 'Blessed Marcelina Darowska, Religious',
    marcellin_champagnat_priest: 'Saint Marcellin Champagnat, Priest',
    marcellinus_of_rome_and_peter_the_exorcist_martyrs:
      'Saints Marcellinus and Peter, Martyrs',
    margaret_clitherow_anne_line_and_margaret_ward_virgin_martyrs:
      'Saints Margaret Clitherow, Anne Line and Margaret Ward, Virgin, Martyrs',
    margaret_mary_alacoque_virgin: 'Saint Margaret Mary Alacoque, Virgin',
    margaret_of_antioch_virgin: 'Saint Margaret of Antioch, Virgin and Martyr',
    margaret_of_hungary_religious: 'Saint Margaret of Hungary, Religious',
    margaret_of_scotland: 'Saint Margaret of Scotland',
    marguerite_bourgeoys_virgin: 'Saint Marguerite Bourgeoys, Virgin',
    marguerite_dyouville_religious: 'Saint Marguerite d’Youville, Religious',
    maria_goretti_virgin: 'Saint Maria Goretti, Virgin and Martyr',
    maria_guadalupe_garcia_zavala_virgin:
      'Saint María Guadalupe García Zavala, Virgin',
    maria_micaela_of_the_blessed_sacrament_desmaisieres_virgin:
      'Saint María Micaela of the Blessed Sacrament Desmaisières, Virgin',
    mariana_of_jesus_de_paredes_virgin:
      'Saint Mariana of Jesus de Paredes, Virgin',
    marianne_cope_virgin: 'Saint Marianne Cope, Virgin',
    marie_anne_blondin_virgin: 'Blessed Marie-Anne Blondin, Virgin',
    marie_leonie_paradis_virgin: 'Blessed Marie-Léonie Paradis, Virgin',
    marie_of_the_incarnation_guyart_religious:
      'Saint Marie of the Incarnation Guyart, Religious',
    marie_rose_durocher_virgin: 'Blessed Marie Rose Durocher, Virgin',
    mark_evangelist: 'Saint Mark, Evangelist',
    marko_krizin_melchior_grodziecki_and_stephen_pongracz_priests:
      'Saints Marko Krizin, Melchior Grodziecki and Stephen Pongrácz, Priests and Martyrs',
    marko_krizin_priest: 'Saint Marko Krizin, Priest and Martyr',
    maron_of_syria_hermit: 'Saint Maroun, Hermit',
    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany:
      'Saints Martha, Mary and Lazarus',
    martin_de_porres_religious: 'Saint Martin de Porres, Religious',
    martin_i_pope: 'Saint Martin I, Pope and Martyr',
    martin_of_tours_bishop: 'Saint Martin of Tours, Bishop',
    martin_wu_xuesheng_and_companions_martyrs:
      'Saint Martin Wu Xuesheng and Companions, Martyrs',
    mary_adeodata_pisani_virgin: 'Blessed Mary Adeodata Pisani, Virgin',
    mary_angela_truszkowska_virgin: 'Blessed Mary Angela Truszkowska, Virgin',
    mary_assunta_pallotta_virgin: 'Blessed Mary Assunta Pallotta, Virgin',
    mary_magdalene: 'Saint Mary Magdalene',
    mary_magdalene_de_pazzi_virgin: 'Saint Mary Magdalene de’ Pazzi, Virgin',
    mary_mother_of_the_church: 'Blessed Virgin Mary, Mother of the Church',
    mary_of_jesus_crucified_petkovic_virgin:
      'Blessed Mary of Jesus Crucified Petković, Virgin',
    mary_of_jesus_in_the_blessed_sacrament_venegas_de_la_torre_virgin:
      'Saint Mary of Jesus in the Blessed Sacrament Venegas de la Torre, Virgin',
    mary_of_jesus_the_good_shepherd_siedliska_virgin:
      'Blessed Mary of Jesus the Good Shepherd Siedliska, Virgin',
    mary_of_the_cross_mackillop_virgin:
      'Saint Mary of the Cross MacKillop, Virgin',
    mary_soledad_torres_acosta_virgin:
      'Saint Mary Soledad Torres y Acosta, Virgin',
    mary_stella_of_the_blessed_sacrament_mardosewicz_and_companions_virgins:
      'Blessed Mary Stella of the Blessed Sacrament Mardosewicz and Companions, Virgins and Martyrs',
    mary_theresa_chiramel_mankidiyan_virgin:
      'Saint Mary Theresa Chiramel Mankidiyan, Virgin',
    mary_theresa_ledochowska_virgin: 'Blessed Mary Theresa Ledóchowska, Virgin',
    mary_ursula_of_jesus_ledochowska_virgin:
      'Saint Mary Ursula of Jesus Ledóchowska, Virgin',
    marydolores_rodriguez_sopena_virgin:
      'Blessed Mary Dolores Rodríguez Sopeña, Virgin',
    matilda_of_ringelheim: 'Saint Matilda',
    matthew_apostle: 'Saint Matthew, Apostle and Evangelist',
    matthias_apostle: 'Saint Matthias, Apostle',
    maurice_of_agaunum_and_companions_martyrs:
      'Saint Maurice and Companions, Martyrs',
    maurice_tornay_priest: 'Blessed Maurice Tornay, Priest and Martyr',
    maurus_of_pecs_bishop: 'Saint Maurus, Bishop',
    maximilian_kolbe_priest: 'Saint Maximilian Kolbe, Priest and Martyr',
    meinrad_of_einsiedeln_martyr: 'Saint Meinrad of Einsiedeln, Martyr',
    mel_of_ardagh_bishop: 'Saint Mel, Bishop',
    melchior_grodziecki_priest: 'Saint Melchior Grodziecki, Priest and Martyr',
    michael_gabriel_and_raphael_archangels:
      'Saints Michael, Gabriel and Raphael, Archangels',
    michael_kozal_bishop: 'Blessed Michael Kozal, Bishop and Martyr',
    miguel_agustin_pro_priest: 'Blessed Miguel Agustin Pro, Priest and Martyr',
    miguel_febres_cordero_religious: 'Saint Miguel Febres Cordero, Religious',
    monica_of_hippo: 'Saint Monica',
    moninne_of_killeavy_virgin: 'Saint Moninne, Virgin',
    most_holy_name_of_jesus: 'Most Holy Name of Jesus',
    most_holy_name_of_mary: 'Most Holy Name of Mary',
    munchin_of_limerick_bishop: 'Saint Munchin, Bishop',
    muredach_of_killala_bishop: 'Saint Muredach, Bishop',
    mutien_marie_wiaux_religious: 'Saint Mutien-Marie Wiaux, Religious',
    nativity_of_mary: 'Nativity of the Blessed Virgin Mary',
    nazaria_ignacia_of_saint_teresa_of_jesus_march_mesa_virgin:
      'Saint Nazaria Ignacia of Saint Teresa of Jesus March Mesa, Virgin',
    nereus_of_terracina_and_achilleus_of_terracina_martyrs:
      'Saints Nereus and Achilleus, Martyrs',
    nicholas_of_flue_hermit: 'Saint Nicholas of Flüe, Hermit',
    nicholas_of_myra_bishop: 'Saint Nicholas, Bishop',
    nicholas_steno_bishop: 'Blessed Nicholas Steno, Bishop',
    nicholas_tavelic_priest: 'Saint Nicholas Tavelić, Priest and Martyr',
    ninian_of_whithorn_bishop: 'Saint Ninian, Bishop',
    norbert_of_xanten_bishop: 'Saint Norbert, Bishop',
    nuno_of_saint_mary_pereira_religious:
      'Saint Nuno of Saint Mary Pereira, Religious',
    nykyta_budka_and_vasyl_velychkovsky_bishops:
      'Blesseds Nykyta Budka and Vasyl Velychkovsky, Bishops and Martyrs',
    odile_of_alsace_abbess: 'Saint Odile of Alsace, Abbess',
    odoric_of_pordenone_priest: 'Blessed Odoric of Pordenone, Priest',
    olaf_ii_of_norway_martyr: 'Saint Olaf II, Martyr',
    oleksiy_zarytskyi_priest: 'Blessed Oleksiy Zarytskyi, Priest and Martyr',
    olga_of_kiev: 'Saint Olga',
    oliver_plunket_bishop: 'Saint Oliver Plunket, Bishop and Martyr',
    otteran_of_iona_monk: 'Saint Otteran, Monk',
    otto_of_bamberg_bishop: 'Saint Otto of Bamberg, Bishop',
    our_lady_help_of_christians: 'Our Lady, Help of Christians',
    our_lady_mediatrix_of_all_grace: 'Our Lady, Mediatrix of All Grace',
    our_lady_mother_of_christian_unity: 'Our Lady, Mother of Christian Unity',
    our_lady_mother_of_divine_providence_patroness_of_puerto_rico:
      'Our Lady, Mother of Divine Providence, Patroness of Puerto Rico',
    our_lady_of_aparecida_patroness_of_brazil:
      'Our Lady of Aparecida, Patroness of Brazil',
    our_lady_of_bethlehem: 'Our Lady of Bethlehem',
    our_lady_of_china: 'Our Lady of China',
    our_lady_of_czestochowa: 'Our Lady of Częstochowa',
    our_lady_of_fatima: 'Our Lady of Fatima',
    our_lady_of_good_counsel: 'Our Lady of Good Counsel',
    our_lady_of_guadalupe: 'Our Lady of Guadalupe',
    our_lady_of_guadalupe_patroness_of_the_americas:
      'Our Lady of Guadalupe, Patroness of the Americas',
    our_lady_of_guadalupe_patroness_of_the_philippines:
      'Our Lady of Guadalupe, Patroness of the Philippines',
    our_lady_of_hungary_patroness_of_hungary:
      'Our Lady of Hungary, Patroness of Hungary',
    our_lady_of_itati: 'Our Lady of Itatí',
    our_lady_of_knock: 'Our Lady of Knock',
    our_lady_of_lanka: 'Our Lady of Lanka',
    our_lady_of_lebanon: 'Our Lady of Lebanon',
    our_lady_of_loreto: 'Our Lady of Loreto',
    our_lady_of_lourdes: 'Our Lady of Lourdes',
    our_lady_of_lujan_patroness_of_argentina:
      'Our Lady of Luján, Patroness of Argentina',
    our_lady_of_madhu: 'Our Lady of Madhu',
    our_lady_of_marija_bistrica: 'Our Lady of Marija Bistrica',
    our_lady_of_mercy: 'Our Lady of Mercy',
    our_lady_of_mount_carmel: 'Our Lady of Mount Carmel',
    our_lady_of_mount_carmel_mother_and_queen_of_chile:
      'Our Lady of Mount Carmel, Mother and Queen of Chile',
    our_lady_of_perpetual_help: 'Our Lady of Perpetual Help',
    our_lady_of_refuge: 'Our Lady of Refuge',
    our_lady_of_sorrows: 'Our Lady of Sorrows',
    our_lady_of_sorrows_patroness_of_slovakia:
      'Our Lady of Sorrows, Patroness of Slovakia',
    our_lady_of_the_discovery_of_the_hidden_christians:
      'Our Lady of the Discovery of the Hidden Christians',
    our_lady_of_the_gate_of_dawn: 'Our Lady of the Gate of Dawn',
    our_lady_of_the_pillar: 'Our Lady of the Pillar',
    our_lady_of_the_rosary: 'Our Lady of the Rosary',
    our_lady_of_the_valley: 'Our Lady of the Valley',
    our_lady_of_vladimir: 'Our Lady of Vladimir',
    our_lady_of_walsingham: 'Our Lady of Walsingham',
    our_lady_queen_of_peace: 'Our Lady of Peace',
    our_lady_queen_of_poland: 'Our Lady, Queen of Poland',
    our_lord_jesus_christ_the_eternal_high_priest:
      'Our Lord Jesus Christ, the Eternal High Priest',
    our_lord_of_miracles: 'Our Lord of Miracles',
    pancras_of_rome_martyr: 'Saint Pancras, Martyr',
    pantaleon_of_nicomedia_martyr: 'Saint Pantaleon of Nicomedia, Martyr',
    paschal_baylon_religious: 'Saint Paschal Baylón, Religious',
    passion_of_saint_john_the_baptist: 'Passion of Saint John the Baptist',
    patrick_of_ireland_bishop: 'Saint Patrick, Bishop',
    patrick_of_ireland_bishop_patron_of_ireland:
      'Saint Patrick, Bishop and Patron of Ireland',
    paul_chen_changpin_and_companions_martyrs:
      'Saint Paul Chen Changpin and Companions, Martyrs',
    paul_liu_hanzuo_priest: 'Saint Paul Liu Hanzuo, Priest and Martyr',
    paul_miki_and_companions_martyrs: 'Saint Paul Miki and Companions, Martyrs',
    paul_of_the_cross_priest: 'Saint Paul of the Cross, Priest',
    paul_of_thebes_hermit: 'Blessed Paul of Thebes, Hermit',
    paul_vi_pope: 'Saint Paul VI, Pope',
    paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin:
      'Saint Paulina of the Agonizing Heart of Jesus Visintainer, Virgin',
    paulinus_of_nola_bishop: 'Saint Paulinus of Nola, Bishop',
    paulinus_of_trier_bishop: 'Saint Paulinus of Trier, Bishop',
    paulinus_of_york_bishop: 'Saint Paulinus of York, Bishop',
    pavel_peter_gojdic_bishop: 'Blessed Pavel Peter Gojdič, Bishop and Martyr',
    pedro_calungsod_martyr: 'Saint Pedro Calungsod, Martyr',
    pelagius_of_cordoba_martyr: 'Saint Pelagius of Córdoba, Martyr',
    perpetua_of_carthage_and_felicity_of_carthage_martyrs:
      'Saints Perpetua and Felicity, Martyrs',
    peter_baptist_blasquez_paul_miki_and_companions_martyrs:
      'Saints Peter Baptist Blásquez, Paul Miki and Companions, Martyrs',
    peter_canisius_priest:
      'Saint Peter Canisius, Priest and Doctor of the Church',
    peter_chanel_priest: 'Saint Peter Chanel, Priest and Martyr',
    peter_chanel_priest_patron_of_oceania:
      'Saint Peter Chanel, Proto-martyr of Oceania and Patron of Oceania',
    peter_chrysologus_bishop:
      'Saint Peter Chrysologus, Bishop and Doctor of the Church',
    peter_claver_priest: 'Saint Peter Claver, Priest',
    peter_damian_bishop: 'Saint Peter Damian, Bishop and Doctor of the Church',
    peter_de_zuniga_and_louis_flores_priests:
      'Blesseds Peter de Zúñiga and Louis Flores, Priests and Martyrs',
    peter_julian_eymard_priest: 'Saint Peter Julian Eymard, Priest',
    peter_kibe_priest_and_companions_martyrs:
      'Blessed Peter Kibe, Priest, and Companions, Martyrs',
    peter_liu_wenyuan_martyr: 'Saint Peter Liu Wenyuan, Martyr',
    peter_of_alcantara_priest: 'Saint Peter of Alcántara, Priest',
    peter_sanz_bishop: 'Saint Peter Sanz, Bishop and Martyr',
    peter_to_rot_martyr: 'Blessed Peter To Rot, Martyr',
    peter_wu_guosheng_martyr: 'Saint Peter Wu Guosheng, Martyr',
    philip_and_james_apostles: 'Saints Philip and James, Apostles',
    philip_evans_and_john_lloyd_priests:
      'Saints Philip Evans and John Lloyd, Priests and Martyrs',
    philip_neri_priest: 'Saint Philip Neri, Priest',
    philip_of_jesus_de_las_casas_martyr:
      'Saint Philip of Jesus de las Casas, Martyr',
    philip_of_jesus_de_las_casas_paul_miki_and_companions_martyrs:
      'Saints Philip of Jesus de las Casas, Paul Miki and Companions, Martyrs',
    pirmin_of_hornbach_abbot: 'Saint Pirmin, Abbot',
    pius_ix_pope: 'Blessed Pius IX, Pope',
    pius_of_pietrelcina_priest: 'Saint Pius of Pietrelcina, Priest',
    pius_v_pope: 'Saint Pius V, Pope',
    pius_x_pope: 'Saint Pius X, Pope',
    polycarp_of_smyrna_bishop: 'Saint Polycarp, Bishop and Martyr',
    pontian_i_pope_and_hippolytus_of_rome_priest:
      'Saints Pontian, Pope, and Hippolytus, Priest, Martyrs',
    pothinus_of_lyon_bishop_blandina_of_lyon_virgin_and_companions_martyrs:
      'Saints Pothinus, Bishop, Blandina, Virgin, and Companions, Martyrs',
    presentation_of_mary: 'Presentation of the Blessed Virgin Mary',
    procopius_of_sazava_abbot: 'Saint Procopius of Sázava, Abbot',
    publius_of_malta_bishop: 'Saint Publius, Bishop',
    queenship_of_mary: 'Queenship of the Blessed Virgin Mary',
    quirinus_of_sescia_bishop: 'Saint Quirinus of Sescia, Bishop and Martyr',
    rabanus_maurus_bishop: 'Saint Rabanus Maurus, Bishop',
    radim_of_gniezno_bishop: 'Saint Radim, Bishop',
    rafqa_pietra_choboq_ar_rayes_virgin:
      'Saint Rafqa Pietra Choboq Ar-Rayès, Virgin',
    raphael_chylinski_priest: 'Blessed Raphael Chyliński, Priest',
    raphael_guizar_y_valencia_bishop: 'Saint Raphael Guízar y Valencia, Bishop',
    raphael_of_saint_joseph_kalinowski_priest:
      'Saint Raphael of Saint Joseph Kalinowski, Priest',
    raymond_of_penyafort_priest: 'Saint Raymond of Penyafort, Priest',
    remigius_of_reims_bishop: 'Saint Remigius, Bishop',
    richard_gwyn_martyr: 'Saint Richard Gwyn, Martyr',
    richard_of_chichester_bishop: 'Saint Richard of Chichester, Bishop',
    rita_of_cascia_religious: 'Saint Rita of Cascia, Religious',
    robert_bellarmine_bishop:
      'Saint Robert Bellarmine, Bishop and Doctor of the Church',
    roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests:
      'Saints Roch González, Alphonsus Rodríguez and John del Castillo, Priests and Martyrs',
    roch_of_montpellier: 'Saint Roch',
    romuald_of_ravenna_abbot: 'Saint Romuald, Abbot',
    rose_of_lima_virgin: 'Saint Rose of Lima, Virgin',
    rose_of_lima_virgin_copatroness_of_the_philippines:
      'Saint Rose of Lima, Virgin and Copatroness of the Philippines',
    rose_philippine_duchesne_virgin: 'Saint Rose Philippine Duchesne, Virgin',
    rupert_of_salzburg_and_virgilius_of_salzburg_bishops:
      'Saints Rupert and Virgilius of Salzburg, Bishops',
    salomea_of_poland_religious: 'Blessed Salomea of Poland, Religious',
    sancha_of_portugal_and_mafalda_of_portugal_virgins:
      'Blessed Sancha and Mafalda, Virgins',
    sara_salkahazi_virgin: 'Blessed Sára Salkaházi, Virgin and Martyr',
    scholastica_of_nursia_virgin: 'Saint Scholastica, Virgin',
    sebastian_de_aparicio_religious: 'Blessed Sebastian de Aparicio, Religious',
    sebastian_of_milan_martyr: 'Saint Sebastian, Martyr',
    senan_of_inis_cathaigh_bishop: 'Saint Senan, Bishop',
    seven_holy_founders_of_the_servite_order:
      'Seven Holy Founders of the Servite Order',
    seven_martyred_nuns_from_the_franciscan_missionaries_of_mary:
      'Seven Martyred Nuns from the Franciscan Missionaries of Mary',
    severinus_of_noricum_monk: 'Saint Severinus of Noricum, Monk',
    sharbel_makhluf_priest: 'Saint Sharbel Makhlūf, Priest',
    shipwreck_of_saint_paul_apostle: 'Shipwreck of Saint Paul, Apostle',
    sigismund_of_burgundy_martyr: 'Saint Sigismund, Martyr',
    sigmund_felix_felinski_bishop: 'Saint Sigmund Felix Feliński, Bishop',
    simon_and_jude_apostles: 'Saints Simon and Jude, Apostles',
    simon_of_lipnica_priest: 'Saint Simon of Lipnica, Priest',
    six_welsh_martyrs_and_companions: 'Six Welsh Martyrs and Companions',
    sixtus_ii_pope_and_companions_martyrs:
      'Saint Sixtus II, Pope, and Companions, Martyrs',
    spyridon_of_trimythous_bishop: 'Saint Spyridon, Bishop',
    stanislaus_kazimierczyk_priest: 'Saint Stanislaus Kazimierczyk, Priest',
    stanislaus_kostka_religious: 'Saint Stanislaus Kostka, Religious',
    stanislaus_of_szczepanow_bishop: 'Saint Stanislaus, Bishop and Martyr',
    stanislaus_of_szczepanow_bishop_patron_of_poland:
      'Saint Stanislaus, Bishop, Martyr and Patron of Poland',
    stephen_i_of_hungary: 'Saint Stephen of Hungary',
    stephen_the_first_martyr: 'Saint Stephen, the First Martyr',
    sunday_of_the_word_of_god: 'Sunday of the Word of God',
    sunniva_of_norway_virgin: 'Saint Sunniva, Virgin and Martyr',
    swithun_of_winchester_bishop: 'Saint Swithun, Bishop',
    sylvester_i_pope: 'Saint Sylvester I, Pope',
    szilard_bogdanffy_bishop: 'Blessed Szilárd Bogdánffy, Bishop and Martyr',
    teilo_of_llandaff_bishop: 'Saint Teilo, Bishop',
    teresa_benedicta_of_the_cross_stein_virgin:
      'Saint Teresa Benedicta of the Cross Stein, Virgin and Martyr',
    teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe:
      'Saint Teresa Benedicta of the Cross Stein, Virgin, Martyr and Copatroness of Europe',
    teresa_of_calcutta_religious: 'Saint Teresa of Calcutta, Religious',
    teresa_of_jesus_jornet_ibars_virgin:
      'Saint Teresa of Jesus Jornet Ibars, Virgin',
    teresa_of_jesus_of_avila_virgin:
      'Saint Teresa of Jesus of Ávila, Virgin and Doctor of the Church',
    teresa_of_jesus_of_los_andes_virgin:
      'Saint Teresa of Jesus of Los Andes, Virgin',
    teresa_of_portugal_religious: 'Blessed Teresa of Portugal, Religious',
    theodore_of_canterbury_bishop: 'Saint Theodore of Canterbury, Bishop',
    theodore_romzha_bishop: 'Blessed Theodore Romzha, Bishop and Martyr',
    theodosius_of_the_caves_abbot: 'Saint Theodosius of the Caves, Abbot',
    theotonius_of_coimbra_priest: 'Saint Theotonius of Coimbra, Priest',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin:
      'Saint Thérèse of the Child Jesus and the Holy Face of Lisieux, Virgin and Doctor of the Church',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin_copatroness_of_france:
      'Saint Thérèse of the Child Jesus and the Holy Face of Lisieux, Virgin, Doctor of the Church and Copatroness of France',
    thomas_apostle: 'Saint Thomas, Apostle',
    thomas_aquinas_priest:
      'Saint Thomas Aquinas, Priest and Doctor of the Church',
    thomas_becket_bishop: 'Saint Thomas Becket, Bishop and Martyr',
    thomas_hioji_rokuzayemon_nishi_priest_and_companions_martyrs:
      'Saint Thomas Hioji Rokuzayemon Nishi, Priest, and Companions, Martyrs',
    thomas_of_villanova_bishop: 'Saint Thomas of Villanova, Bishop',
    thorfinn_of_hamar_bishop: 'Saint Thorfinn, Bishop',
    thorlac_of_iceland_bishop: 'Saint Thorlac, Bishop',
    timothy_of_ephesus_and_titus_of_crete_bishops:
      'Saints Timothy and Titus, Bishops',
    translation_of_the_relics_of_saint_stephen_of_hungary:
      'Translation of the Relics of Saint Stephen of Hungary',
    turibius_of_mogrovejo_bishop: 'Saint Turibius of Mogrovejo, Bishop',
    ulrich_of_augsburg_bishop: 'Saint Ulrich of Augsburg, Bishop',
    ursula_of_cologne_and_companions_virgins:
      'Saint Ursula and Companions, Virgins and Martyrs',
    valentine_of_raetia_bishop: 'Saint Valentine of Raetia, Bishop',
    vincent_de_paul_priest: 'Saint Vincent de Paul, Priest',
    vincent_ferrer_priest: 'Saint Vincent Ferrer, Priest',
    vincent_kadlubek_bishop: 'Blessed Vincent Kadłubek, Bishop',
    vincent_lewoniuk_and_companions_martyrs:
      'Blessed Vincent Lewoniuk and Companions, Martyrs',
    vincent_of_saragossa_deacon: 'Saint Vincent, Deacon and Martyr',
    vincent_pallotti_priest: 'Saint Vincent Pallotti, Priest',
    virgilius_of_salzburg_bishop: 'Saint Fergal, Bishop and Missionary',
    visitation_of_mary: 'Visitation of the Blessed Virgin Mary',
    vitus_of_lucania_martyr: 'Saint Vitus, Martyr',
    vladimir_ghika_priest: 'Blessed Vladimir Ghika, Priest and Martyr',
    vladimir_i_the_great_of_kiev: 'Saint Vladimir the Great',
    waitangi_day: 'Waitangi Day',
    walpurga_of_heidenheim_abbess: 'Saint Walpurga of Heidenheim, Abbess',
    wenceslaus_i_of_bohemia_martyr: 'Saint Wenceslaus, Martyr',
    wenceslaus_i_of_bohemia_martyr_patron_of_the_czech_nation:
      'Saint Wenceslaus, Martyr and patron of the Czech nation',
    wendelin_of_trier_abbot: 'Saint Wendelin, Abbot',
    wilfrid_of_york_bishop: 'Saint Wilfrid, Bishop',
    william_apor_bishop: 'Blessed William Apor, Bishop and Martyr',
    willibald_of_eichstatt_bishop: 'Saint Willibald, Bishop',
    willibrord_of_utrecht_bishop: 'Saint Willibrord, Bishop',
    winefride_of_flintshire_virgin: 'Saint Winefride, Virgin',
    wladyslaw_bladzinski_priest_and_companions_martyrs:
      'Blessed Wladyslaw Błądziński, Priest, and Companions, Martyrs',
    wolfgang_of_regensburg_bishop: 'Saint Wolfgang of Regensburg, Bishop',
    wulstan_of_worcester_bishop: 'Saint Wulstan, Bishop',
    yolanda_of_poland_religious: 'Blessed Yolanda, Religious',
    zdenka_cecilia_schelingova_virgin:
      'Blessed Zdenka Cecilia Schelingová, Virgin and Martyr',
    zdislava_of_lemberk: 'Saint Zdislava',
    zepherin_namuncura: 'Blessed Zepherin Namuncurá',
    zoltan_lajos_meszlenyi_bishop:
      'Blessed Zoltán Lajos Meszlényi, Bishop and Martyr',
    zygmunt_gorazdowski_priest: 'Saint Zygmunt Gorazdowski, Priest',
  },
} as RomcalLocale;
