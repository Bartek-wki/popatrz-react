const initialState = {
  articles: [
    {
      articleId:"article-02-22",
      previous:"article-02-22",
      next:"article-03-22",
      articleTitle:"Lorem ipsum dolor",
      imageUrl:"https://images.pexels.com/photos/977659/pexels-photo-977659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      opis:"krzyż",
      paragraphOne:"Integer ante nunc, viverra in aliquet quis, rutrum vitae magna. Nulla aliquet risus sagittis molestie viverra. Donec finibus eros vel arcu tincidunt interdum. Sed sed scelerisque nulla, quis ultricies mauris. Donec sed est sit amet erat dignissim tempor. Praesent et metus sed leo efficitur mollis vel ut arcu. Praesent at felis nisi. Donec sagittis sodales ipsum, ultrices semper arcu eleifend consectetur. Duis sit amet diam lacus. Morbi ac ligula fermentum, posuere turpis scelerisque, varius nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer aliquam interdum ultrices. Praesent facilisis vehicula ligula, eu tincidunt magna hendrerit a. In laoreet commodo est, non lacinia lorem ullamcorper aliquet. Vivamus lobortis, enim ut faucibus maximus, magna velit condimentum massa, vitae consequat turpis lectus eu massa. Pellentesque cursus hendrerit nisi, non facilisis lorem ullamcorper at.",
      quote:"Donec maximus posuere elit, id elementum enim aliquet quis. Mauris pulvinar non ante luctus pellentesque. Sed fringilla turpis metus. Vestibulum bibendum finibus ante ac rhoncus. ~Yoda",
      paragraphTwo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin lorem sed faucibus accumsan. Proin cursus nibh nibh, volutpat euismod lectus euismod in. Donec pretium leo at scelerisque rhoncus. Nam porta scelerisque neque sagittis aliquet. Aliquam a ipsum ligula. In tortor felis, sodales id sodales vitae, efficitur tempus est. Vivamus lobortis lectus ac neque ornare, ut feugiat arcu ullamcorper. Vivamus vel dolor mi. Pellentesque eu dui at tellus condimentum viverra. Sed commodo tristique semper. Suspendisse commodo lacus eu ornare tempus. Donec tristique sem pharetra neque maximus semper. Nunc quis finibus sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque eget volutpat felis.",
      introParagraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis pharetra arcu. Mauris tellus mi, pretium posuere efficitur eu, congue ac mauris. Nulla facilisi. Nullam egestas massa ac vehicula porta. Duis condimentum metus semper, facilisis sem in, volutpat est.",
      month:"LUTY",
      mainTopic:"KRZYŻ",
      howWeLook:"howWeLook-02-22"
    },
    {
      articleId:"article-03-22",
      previous:"article-02-22",
      next:"article-04-22",
      articleTitle:"Consectetur adipiscing elit",
      imageUrl:"https://images.pexels.com/photos/7523839/pexels-photo-7523839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      opis:"wiewiórka",
      paragraphOne:"Phasellus dignissim sapien est, ullamcorper varius neque fringilla vel. Fusce eu augue condimentum, tempor eros vel, fringilla nunc. Morbi mollis sollicitudin pulvinar. Aliquam cursus velit ac eleifend interdum. Nullam rutrum interdum tortor, non vehicula ex pretium et. Suspendisse nec massa metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis accumsan risus a elit aliquam, vel tincidunt risus suscipit. Donec porta ipsum eu pharetra placerat. Pellentesque nec aliquet nisl. Nunc ac tempus arcu, sed tincidunt massa. Etiam efficitur nisl tortor, euismod iaculis justo luctus ut. Cras convallis mollis augue, vitae rutrum orci pharetra vel. Praesent fermentum nec arcu a suscipit. Vivamus et libero blandit velit tincidunt dignissim. Aliquam pulvinar in urna ut suscipit. Donec in blandit velit. Donec efficitur sem augue, a ornare est efficitur sit amet.",
      quote:"Phasellus dignissim sapien est, ullamcorper varius neque fringilla vel. Fusce eu augue condimentum, tempor eros vel, fringilla nunc",
      paragraphTwo:"Nunc imperdiet nisi hendrerit convallis bibendum. Nam vitae ipsum a nibh ultrices bibendum. Aliquam tempor gravida libero, nec aliquam neque pretium ut. Fusce rutrum, nibh ut faucibus sagittis, nisi elit pellentesque erat, eu sagittis massa tellus at enim. In maximus fringilla ante, in tempor nisi ullamcorper ut. Ut non posuere ligula, vitae tempor lacus. Proin sit amet ullamcorper arcu, eu porttitor sapien. Maecenas convallis purus consequat quam pellentesque laoreet. Nunc rhoncus volutpat vestibulum. Donec vitae neque in tortor tempor consequat sed vitae justo. Nam varius nisi et odio tristique ultricies. Phasellus ac nisl eget ligula ornare venenatis. Donec efficitur orci a lectus cursus maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam dolor mauris, molestie id velit sed, ultricies tempus nunc.",
      introParagraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis pharetra arcu. Mauris tellus mi, pretium posuere efficitur eu, congue ac mauris. Nulla facilisi. Nullam egestas massa ac vehicula porta. Duis condimentum metus semper, facilisis sem in, volutpat est.",
      month:"MARZEC",
      mainTopic:"WIEWIÓRKĘ",
      howWeLook:"howWeLook-03-22"
    },
    {
      articleId:"article-04-22",
      previous:"article-03-22",
      next:"article-05-22",
      articleTitle:"Fusce interdum faucibus",
      imageUrl:"https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      opis:"delfiny",
      paragraphOne:"Integer ante nunc, viverra in aliquet quis, rutrum vitae magna. Nulla aliquet risus sagittis molestie viverra. Donec finibus eros vel arcu tincidunt interdum. Sed sed scelerisque nulla, quis ultricies mauris. Donec sed est sit amet erat dignissim tempor. Praesent et metus sed leo efficitur mollis vel ut arcu. Praesent at felis nisi. Donec sagittis sodales ipsum, ultrices semper arcu eleifend consectetur. Duis sit amet diam lacus. Morbi ac ligula fermentum, posuere turpis scelerisque, varius nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer aliquam interdum ultrices. Praesent facilisis vehicula ligula, eu tincidunt magna hendrerit a. In laoreet commodo est, non lacinia lorem ullamcorper aliquet. Vivamus lobortis, enim ut faucibus maximus, magna velit condimentum massa, vitae consequat turpis lectus eu massa. Pellentesque cursus hendrerit nisi, non facilisis lorem ullamcorper at.",
      quote:"Integer mauris odio, efficitur ut porttitor et, commodo eget tortor. Nulla ullamcorper nulla ut molestie sagittis. Curabitur tempor convallis lorem id semper. Proin at augue arcu.",
      paragraphTwo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin lorem sed faucibus accumsan. Proin cursus nibh nibh, volutpat euismod lectus euismod in. Donec pretium leo at scelerisque rhoncus. Nam porta scelerisque neque sagittis aliquet. Aliquam a ipsum ligula. In tortor felis, sodales id sodales vitae, efficitur tempus est. Vivamus lobortis lectus ac neque ornare, ut feugiat arcu ullamcorper. Vivamus vel dolor mi. Pellentesque eu dui at tellus condimentum viverra. Sed commodo tristique semper. Suspendisse commodo lacus eu ornare tempus. Donec tristique sem pharetra neque maximus semper. Nunc quis finibus sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque eget volutpat felis.",
      introParagraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis pharetra arcu. Mauris tellus mi, pretium posuere efficitur eu, congue ac mauris. Nulla facilisi. Nullam egestas massa ac vehicula porta. Duis condimentum metus semper, facilisis sem in, volutpat est.",
      month:"KWIECIEŃ",
      mainTopic:"DELFINY",
      howWeLook:"howWeLook-04-22"
    },
    {
      articleId:"article-05-22",
      previous:"article-04-22",
      next:"article-06-22",
      articleTitle:"Nam posuere erat leo",
      imageUrl:"https://images.pexels.com/photos/572688/pexels-photo-572688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      opis:"las",
      paragraphOne:"Etiam mattis odio nec augue semper viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut sed nibh ac quam consectetur ornare. Vivamus in turpis et leo sodales suscipit sed nec tortor. Maecenas a ligula risus. Aenean ut sem lorem. Proin erat nisl, fermentum eu fringilla eu, dictum vitae lacus. Sed at lacinia diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vestibulum quis sem fringilla vehicula.",
      quote:"Proin at augue arcu. Aenean eget nisl sed ligula pretium imperdiet. Morbi et augue lacus. Integer vulputate lacus dolor, quis finibus nibh condimentum eu.",
      paragraphTwo:"Phasellus ex enim, pellentesque in ex non, hendrerit accumsan mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam ac erat at quam commodo ullamcorper. Donec eget elit id diam hendrerit rhoncus ac at quam. Maecenas quis nunc at tellus elementum placerat id et risus. Ut mattis augue at dolor tristique congue. Vivamus iaculis molestie nibh, in suscipit velit ultricies et. Maecenas pulvinar risus aliquam vestibulum efficitur. Mauris nec arcu laoreet, sagittis massa in, dapibus tortor. Nam facilisis mattis nulla sed fermentum.",
      introParagraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis pharetra arcu. Mauris tellus mi, pretium posuere efficitur eu, congue ac mauris. Nulla facilisi. Nullam egestas massa ac vehicula porta. Duis condimentum metus semper, facilisis sem in, volutpat est.",
      month:"MAJ",
      mainTopic:"LAS",
      howWeLook:"howWeLook-05-22"
    },
    {
      articleId:"article-06-22",
      previous:"article-05-22",
      next:"article-06-22", 
      articleTitle:"Mauris malesuada in diam sed blandit.",
      imageUrl:"https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      opis:"Zachód",
      paragraphOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum faucibus sollicitudin. Nam posuere erat leo. Quisque maximus, lacus at pretium tempus, nulla metus gravida sapien, a posuere felis diam at urna. Mauris malesuada in diam sed blandit. Aliquam ultrices urna purus, eget vehicula nulla aliquet in. Quisque quis blandit ex, et accumsan elit. In hac habitasse platea dictumst. Morbi non lorem sit amet dui accumsan convallis tristique in nibh. Aliquam erat volutpat. Duis vitae ultricies sapien. Fusce ac ipsum posuere, rutrum mauris in, imperdiet tellus. Praesent accumsan sapien ut sollicitudin faucibus. Phasellus condimentum congue enim eu pulvinar. Sed congue ex nulla, vel hendrerit lectus ultricies in. Aenean id feugiat leo. Donec elementum id dolor nec cursus. In quis ornare lorem. Vestibulum ultrices lectus ut nisi commodo lacinia.",
      quote:"Phasellus dignissim sapien est, ullamcorper varius neque fringilla vel. Fusce eu augue condimentum, tempor eros vel, fringilla nunc. Morbi mollis sollicitudin pulvinar. Aliquam cursus velit ac eleifend interdum.",
      paragraphTwo:"Nunc imperdiet nisi hendrerit convallis bibendum. Nam vitae ipsum a nibh ultrices bibendum. Aliquam tempor gravida libero, nec aliquam neque pretium ut. Fusce rutrum, nibh ut faucibus sagittis, nisi elit pellentesque erat, eu sagittis massa tellus at enim. In maximus fringilla ante, in tempor nisi ullamcorper ut. Ut non posuere ligula, vitae tempor lacus. Proin sit amet ullamcorper arcu, eu porttitor sapien. Maecenas convallis purus consequat quam pellentesque laoreet. Nunc rhoncus volutpat vestibulum. Donec vitae neque in tortor tempor consequat sed vitae justo. Nam varius nisi et odio tristique ultricies. Phasellus ac nisl eget ligula ornare venenatis. Donec efficitur orci a lectus cursus maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam dolor mauris, molestie id velit sed, ultricies tempus nunc.",
      introParagraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis pharetra arcu. Mauris tellus mi, pretium posuere efficitur eu, congue ac mauris. Nulla facilisi. Nullam egestas massa ac vehicula porta. Duis condimentum metus semper, facilisis sem in, volutpat est.",
      month:"CZERWIEC",
      mainTopic:"ZACHÓD",
      howWeLook:"howWeLook-06-22"
    }
  ],
  howWeLook: [
    {
      howWeLook:"howWeLook-06-22",
      previous:"howWeLook-05-22",
      next:"howWeLook-06-22", 
      howWeLookTitle:"Mauris malesuada in diam sed blandit.",
      meets: [
        {
          data: "01.01.2022 r",
          name: "Lorem ipsum dolor sit amet",
        },
        {
          data: "05.01.2022 r",
          name: "Aliquam placerat",
        },
        {
          data: "08.01.2022 r",
          name: "In libero eget sagittis",
        },
        {
          data: "11.01.2022 r",
          name: "Consectetur adipiscing elit",
        },
        {
          data: "15.01.2022 r",
          name: "Nulla sodales vel nunc at pharetra",
        },
        {
          data: "22.01.2022 r",
          name: "Maecenas purus felis, sodales sed gravida id, congue eget urna.",
        },
      ],      
      imageCalendarUrl:"../images/calendar.jpg",
      opis:"Calendar",
      subTitleOne:"Class aptent taciti sociosqu ad litora torquent",
      imageSumUpOneUrl:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      sumUpOneFirst:"Nam tincidunt urna maximus nulla mattis hendrerit. Curabitur maximus luctus tellus a vestibulum. Sed semper lorem at mattis tristique. Etiam non eros justo. Pellentesque faucibus rhoncus ante id consequat. Donec semper, risus sit amet pellentesque porttitor, orci nunc tincidunt nisi, ut.",
      sumUpOneSecond:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat in libero eget sagittis. Suspendisse at elit tellus. Nulla sodales vel nunc at pharetra.",
      
      subTitleTwo:"Praesent molestie nisl porta libero",
      imageSumUpTwoUrl:"https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      sumUpTwoFirst:"Mauris tincidunt felis sapien. Suspendisse sit amet mi non felis euismod dictum. Curabitur vitae posuere odio. Suspendisse volutpat et sapien quis aliquam. Pellentesque ac porttitor risus. Proin ut sapien eget dui vulputate commodo. Aliquam congue erat nec dui facilisis tempor. Integer ut ante turpis. Aliquam sed dui et tortor elementum vulputate et venenatis odio. Donec auctor venenatis placerat. Nam consequat justo commodo tincidunt egestas",
      sumUpTwoSecond:"",

      subTitleThree:"Fermentum, sit amet condimentum nisl blandit",
      imageSumUpThreeUrl:"https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      sumUpThreeFirst:"Nullam eget blandit ex. Pellentesque in dignissim sapien, vitae tincidunt lorem. Proin mauris ligula, rhoncus non aliquam sit amet, convallis eget lectus. Pellentesque nec ex ipsum. Duis sed feugiat libero. Sed iaculis enim arcu. Proin feugiat molestie mollis. Pellentesque ut scelerisque orci. Nunc euismod tincidunt scelerisque. Proin eu iaculis dui. Donec a luctus ipsum.",
      sumUpThreeSecond:"Integer velit nisl, bibendum vitae nunc a, rutrum malesuada metus. Proin et nibh ultrices, elementum nibh eget, facilisis enim.",

      subTitleFour:"Fusce porta id mauris non rutrum",
      imageSumUpFourUrl:"https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      sumUpFourFirst:"Proin non pulvinar lacus. Morbi sagittis at urna vitae placerat. Mauris at erat vitae nulla fringilla ullamcorper. Sed eu consectetur mi. Cras vel auctor lacus. Nullam sed condimentum odio. Praesent rhoncus arcu vel est pretium, eu feugiat risus volutpat. Nullam tristique, nisl at porta malesuada, urna nunc pellentesque mauris, vitae posuere dolor tortor in est. Cras malesuada molestie arcu, ac vulputate mauris eleifend sed.",
      sumUpFourSecond:"Proin luctus lacus a lacus finibus, consectetur ornare erat dapibus. Praesent viverra fringilla turpis tincidunt ultrices. Aenean mollis volutpat est, vitae mattis ante iaculis tristique. Fusce at risus dui. Nulla et dolor quis ligula porttitor cursus sit amet nec mi. Curabitur maximus orci eget felis finibus efficitur.",

      month:"CZERWIEC",
      mainTopic:"ZACHÓD",
      articleId:"article-06-22"
    },
    {
      howWeLook:"howWeLook-05-22",
      previous:"howWeLook-04-22",
      next:"howWeLook-06-22", 
      howWeLookTitle: "Mauris malesuada in diam sed blandit.",
      meets: [
        {
          data: "01.01.2022 r",
          name: "Lorem ipsum dolor sit amet",
        },
        {
          data: "05.01.2022 r",
          name: "Aliquam placerat",
        },
        {
          data: "08.01.2022 r",
          name: "In libero eget sagittis",
        },
        {
          data: "11.01.2022 r",
          name: "Consectetur adipiscing elit",
        },
        {
          data: "15.01.2022 r",
          name: "Nulla sodales vel nunc at pharetra",
        },
        {
          data: "22.01.2022 r",
          name: "Maecenas purus felis, sodales sed gravida id, congue eget urna.",
        },
      ],      
      imageCalendarUrl:"../images/calendar.jpg",
      opis:"Calendar",
      subTitleOne:"Class aptent taciti sociosqu ad litora torquent",
      imageSumUpOneUrl:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      sumUpOneFirst:"Nam tincidunt urna maximus nulla mattis hendrerit. Curabitur maximus luctus tellus a vestibulum. Sed semper lorem at mattis tristique. Etiam non eros justo. Pellentesque faucibus rhoncus ante id consequat. Donec semper, risus sit amet pellentesque porttitor, orci nunc tincidunt nisi, ut.",
      sumUpOneSecond:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat in libero eget sagittis. Suspendisse at elit tellus. Nulla sodales vel nunc at pharetra.",
      
      subTitleTwo:"Praesent molestie nisl porta libero",
      imageSumUpTwoUrl:"https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      sumUpTwoFirst:"Mauris tincidunt felis sapien. Suspendisse sit amet mi non felis euismod dictum. Curabitur vitae posuere odio. Suspendisse volutpat et sapien quis aliquam. Pellentesque ac porttitor risus. Proin ut sapien eget dui vulputate commodo. Aliquam congue erat nec dui facilisis tempor. Integer ut ante turpis. Aliquam sed dui et tortor elementum vulputate et venenatis odio. Donec auctor venenatis placerat. Nam consequat justo commodo tincidunt egestas",
      sumUpTwoSecond:"",

      subTitleThree:"Fermentum, sit amet condimentum nisl blandit",
      imageSumUpThreeUrl:"https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      sumUpThreeFirst:"Nullam eget blandit ex. Pellentesque in dignissim sapien, vitae tincidunt lorem. Proin mauris ligula, rhoncus non aliquam sit amet, convallis eget lectus. Pellentesque nec ex ipsum. Duis sed feugiat libero. Sed iaculis enim arcu. Proin feugiat molestie mollis. Pellentesque ut scelerisque orci. Nunc euismod tincidunt scelerisque. Proin eu iaculis dui. Donec a luctus ipsum.",
      sumUpThreeSecond:"Integer velit nisl, bibendum vitae nunc a, rutrum malesuada metus. Proin et nibh ultrices, elementum nibh eget, facilisis enim.",

      subTitleFour:"Fusce porta id mauris non rutrum",
      imageSumUpFourUrl:"https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      sumUpFourFirst:"Proin non pulvinar lacus. Morbi sagittis at urna vitae placerat. Mauris at erat vitae nulla fringilla ullamcorper. Sed eu consectetur mi. Cras vel auctor lacus. Nullam sed condimentum odio. Praesent rhoncus arcu vel est pretium, eu feugiat risus volutpat. Nullam tristique, nisl at porta malesuada, urna nunc pellentesque mauris, vitae posuere dolor tortor in est. Cras malesuada molestie arcu, ac vulputate mauris eleifend sed.",
      sumUpFourSecond:"Proin luctus lacus a lacus finibus, consectetur ornare erat dapibus. Praesent viverra fringilla turpis tincidunt ultrices. Aenean mollis volutpat est, vitae mattis ante iaculis tristique. Fusce at risus dui. Nulla et dolor quis ligula porttitor cursus sit amet nec mi. Curabitur maximus orci eget felis finibus efficitur.",

      month:"CZERWIEC",
      mainTopic:"ZACHÓD",
      articleId:"article-05-22"
    },
    {
      howWeLook:"howWeLook-04-22",
      previous:"howWeLook-03-22",
      next:"howWeLook-05-22", 
      howWeLookTitle: "Mauris malesuada in diam sed blandit.",
      meets: [
        {
          data: "01.01.2022 r",
          name: "Lorem ipsum dolor sit amet",
        },
        {
          data: "05.01.2022 r",
          name: "Aliquam placerat",
        },
        {
          data: "08.01.2022 r",
          name: "In libero eget sagittis",
        },
        {
          data: "11.01.2022 r",
          name: "Consectetur adipiscing elit",
        },
        {
          data: "15.01.2022 r",
          name: "Nulla sodales vel nunc at pharetra",
        },
        {
          data: "22.01.2022 r",
          name: "Maecenas purus felis, sodales sed gravida id, congue eget urna.",
        },
      ],      
      imageCalendarUrl:"../images/calendar.jpg",
      opis:"Calendar",
      subTitleOne:"Class aptent taciti sociosqu ad litora torquent",
      imageSumUpOneUrl:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      sumUpOneFirst:"Nam tincidunt urna maximus nulla mattis hendrerit. Curabitur maximus luctus tellus a vestibulum. Sed semper lorem at mattis tristique. Etiam non eros justo. Pellentesque faucibus rhoncus ante id consequat. Donec semper, risus sit amet pellentesque porttitor, orci nunc tincidunt nisi, ut.",
      sumUpOneSecond:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat in libero eget sagittis. Suspendisse at elit tellus. Nulla sodales vel nunc at pharetra.",
      
      subTitleTwo:"Praesent molestie nisl porta libero",
      imageSumUpTwoUrl:"https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      sumUpTwoFirst:"Mauris tincidunt felis sapien. Suspendisse sit amet mi non felis euismod dictum. Curabitur vitae posuere odio. Suspendisse volutpat et sapien quis aliquam. Pellentesque ac porttitor risus. Proin ut sapien eget dui vulputate commodo. Aliquam congue erat nec dui facilisis tempor. Integer ut ante turpis. Aliquam sed dui et tortor elementum vulputate et venenatis odio. Donec auctor venenatis placerat. Nam consequat justo commodo tincidunt egestas",
      sumUpTwoSecond:"",

      subTitleThree:"Fermentum, sit amet condimentum nisl blandit",
      imageSumUpThreeUrl:"https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      sumUpThreeFirst:"Nullam eget blandit ex. Pellentesque in dignissim sapien, vitae tincidunt lorem. Proin mauris ligula, rhoncus non aliquam sit amet, convallis eget lectus. Pellentesque nec ex ipsum. Duis sed feugiat libero. Sed iaculis enim arcu. Proin feugiat molestie mollis. Pellentesque ut scelerisque orci. Nunc euismod tincidunt scelerisque. Proin eu iaculis dui. Donec a luctus ipsum.",
      sumUpThreeSecond:"Integer velit nisl, bibendum vitae nunc a, rutrum malesuada metus. Proin et nibh ultrices, elementum nibh eget, facilisis enim.",

      subTitleFour:"Fusce porta id mauris non rutrum",
      imageSumUpFourUrl:"https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      sumUpFourFirst:"Proin non pulvinar lacus. Morbi sagittis at urna vitae placerat. Mauris at erat vitae nulla fringilla ullamcorper. Sed eu consectetur mi. Cras vel auctor lacus. Nullam sed condimentum odio. Praesent rhoncus arcu vel est pretium, eu feugiat risus volutpat. Nullam tristique, nisl at porta malesuada, urna nunc pellentesque mauris, vitae posuere dolor tortor in est. Cras malesuada molestie arcu, ac vulputate mauris eleifend sed.",
      sumUpFourSecond:"Proin luctus lacus a lacus finibus, consectetur ornare erat dapibus. Praesent viverra fringilla turpis tincidunt ultrices. Aenean mollis volutpat est, vitae mattis ante iaculis tristique. Fusce at risus dui. Nulla et dolor quis ligula porttitor cursus sit amet nec mi. Curabitur maximus orci eget felis finibus efficitur.",

      month:"CZERWIEC",
      mainTopic:"WSCHÓD",
      articleId:"article-04-22"
    }
  ],
  about: {
    descriptionUs: "Jesteśmy grupą młodych ludzi, którzy nie chcą zmarnować swojej młodości. Nie chcemy tracić czasu na przyglądanie się temu co nieistotne, zbędne i obłudne. Patrząc na Jezusa i kierując się jego przykładem chcemy iść przez życie kochając i głosząc Ewangelię. Do tego chcemy też zachęcić was. Idźcie razem z nami i kierujcie swój wzrok w dobrą stronę.",
    quote: "Świecą ciała jest oko twoje. Jeśli oko twoje jest zdrowe, i całe ciało twoje jest jasne. A jeśli jest chore, i ciało twoje jest ciemne. Bacz więc, by światło, które jest w tobie, nie było ciemnością.  Jeśli więc całe ciało twoje jest jasne i nie ma w nim cząstki ciemnej, będzie całe jasne, jak gdyby świeca oświeciła cię swym blaskiem. (Łk. 11,34-36) ",
    descriptionSite: {
      title: "Popatrz... ale na co?",
      paragraphOne: "popatrz na to co wartościowe",
      paragraphTwo: "zobacz piękno dookoła siebie",
      paragraphThree: "dostrzeż Boga w codzienności",
      paragraphFour: "Popatrz, przeczytaj i zainspiruj się!",
    },
    author: "Katolickie Stowarzyszenie Młodzieży Oddział Stróża",
    info: "Zapraszamy na spotkania formacyjne w każdy piątek o godzinie 18:00 do salki przy kościele NMP Królowej Polski w Stróży",
    findUs: "KSM Stróża | Facebook",
    contact: "Kontakt: ksm.oddzial.stroza@gmail.com",
  }
}

export default initialState;