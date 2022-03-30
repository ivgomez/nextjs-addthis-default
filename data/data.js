const data = [
  {
    id: 1,
    pictureName: "Picture 1",
    pictureUrl:
      "https://dhpt9nfi8o3qa.cloudfront.net/eyJidWNrZXQiOiJjb3Jjb3Jhbi1kZXYtaW1hZ2UtcHJvY2Vzc2luZyIsImtleSI6IkFnZW50QXBpL1JlYWxvZ3kvM0FDRDQ4QzktMEE0Ny00OUIyLTkwRDItQkJCRTVFNjk1QTdFL0ExQTFFRTY1LTU5N0MtNEY1Ri1BM0UwLUE3NDk4OTdCM0QwNyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwfSwic21hcnRDcm9wIjp7ImZhY2VJbmRleCI6MCwicGFkZGluZyI6NTB9fX0=",
  },
  {
    id: 2,
    pictureName: "Picture 2",
    pictureUrl:
      "https://dhpt9nfi8o3qa.cloudfront.net/eyJidWNrZXQiOiJjb3Jjb3Jhbi1kZXYtaW1hZ2UtcHJvY2Vzc2luZyIsImtleSI6IkFnZW50QXBpL05ld1RheGkvMjI1MjAvbWVkaWFyb3V0aW5nLnZlc3RhaHViLmNvbS9NZWRpYS8xMTQzNjQ5ODQiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMH0sInNtYXJ0Q3JvcCI6eyJmYWNlSW5kZXgiOjAsInBhZGRpbmciOjUwfX19",
  },
  {
    id: 3,
    pictureName: "Picture 3",
    pictureUrl:
      "https://dhpt9nfi8o3qa.cloudfront.net/eyJidWNrZXQiOiJjb3Jjb3Jhbi1kZXYtaW1hZ2UtcHJvY2Vzc2luZyIsImtleSI6IkFnZW50QXBpL1JlYWxvZ3kvRUY0NEYyRUQtRTZCNy00NTcyLTkwRjEtMzJFOEQ3QkEzQzQ1L0RBNzk3MThBLTE5MjUtNDgyMS1CNjM4LUNFN0QzMjFENjkxNCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwfSwic21hcnRDcm9wIjp7ImZhY2VJbmRleCI6MCwicGFkZGluZyI6NTB9fX0=",
  },
  {
    id: 4,
    pictureName: "Picture 4",
    pictureUrl:
      "https://dhpt9nfi8o3qa.cloudfront.net/eyJidWNrZXQiOiJjb3Jjb3Jhbi1kZXYtaW1hZ2UtcHJvY2Vzc2luZyIsImtleSI6IkFnZW50QXBpL05ld1RheGkvMjAxMDkvbWVkaWFyb3V0aW5nLnZlc3RhaHViLmNvbS9NZWRpYS85ODAyMTkyNSIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwfSwic21hcnRDcm9wIjp7ImZhY2VJbmRleCI6MCwicGFkZGluZyI6NTB9fX0=",
  },
  {
    id: 5,
    pictureName: "Picture 5",
    pictureUrl:
      "https://dhpt9nfi8o3qa.cloudfront.net/eyJidWNrZXQiOiJjb3Jjb3Jhbi1kZXYtaW1hZ2UtcHJvY2Vzc2luZyIsImtleSI6IkFnZW50QXBpL1JlYWxvZ3kvQTNBOTgzQTgtQzNGMS00NTRBLTkzRjItOTk3REQzRjM3Q0EzLzVCNkE2NEY1LUFDOTktNDQxMy1CRjI4LTE4REM0RkFCNEQ2QyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwfSwic21hcnRDcm9wIjp7ImZhY2VJbmRleCI6MCwicGFkZGluZyI6NTB9fX0=",
  },
  {
    id: 6,
    pictureName: "Picture 6",
    pictureUrl:
      "https://dhpt9nfi8o3qa.cloudfront.net/eyJidWNrZXQiOiJjb3Jjb3Jhbi1kZXYtaW1hZ2UtcHJvY2Vzc2luZyIsImtleSI6IkFnZW50QXBpL1JlYWxvZ3kvRDUwMzdCMkUtM0I2Ri00ODI5LTgyMkYtNjM1N0E4Nzc2ODc4LzlBNDBDQzk5LTYzNjAtNEMxRS05MjlFLTUzQTNERDc4QjM2OSIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwfSwic21hcnRDcm9wIjp7ImZhY2VJbmRleCI6MCwicGFkZGluZyI6NTB9fX0=",
  },
  {
    id: 7,
    pictureName: "Picture 7",
    pictureUrl:
      "https://dhpt9nfi8o3qa.cloudfront.net/eyJidWNrZXQiOiJjb3Jjb3Jhbi1kZXYtaW1hZ2UtcHJvY2Vzc2luZyIsImtleSI6IkFnZW50QXBpL1JlYWxvZ3kvMTJCNjQyMjAtMjZCNy00MEE4LTk4MzMtQUVGOTE3OTYwREVDLzg1RTQ2OTk5LUQ3MTYtNEI5NC05OUZGLTJGNjQ0NTFCREM3RiIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwfSwic21hcnRDcm9wIjp7ImZhY2VJbmRleCI6MCwicGFkZGluZyI6NTB9fX0=",
  },
  {
    id: 8,
    pictureName: "Picture 8",
    pictureUrl:
      "https://dhpt9nfi8o3qa.cloudfront.net/eyJidWNrZXQiOiJjb3Jjb3Jhbi1kZXYtaW1hZ2UtcHJvY2Vzc2luZyIsImtleSI6IkFnZW50QXBpL1JlYWxvZ3kvMzY0NjI4ODgtRTY5Qy00RjM4LUJFQkItQzhFM0UwMTZDNTk3LzdGQzA1MzUyLUE3NkItNDU0Ri05OEUxLUYwMjc5NEYwRkY3NCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwfSwic21hcnRDcm9wIjp7ImZhY2VJbmRleCI6MCwicGFkZGluZyI6NTB9fX0=",
  },
  {
    id: 9,
    pictureName: "Picture 9",
    pictureUrl:
      "https://dhpt9nfi8o3qa.cloudfront.net/eyJidWNrZXQiOiJjb3Jjb3Jhbi1kZXYtaW1hZ2UtcHJvY2Vzc2luZyIsImtleSI6IkFnZW50QXBpL1JlYWxvZ3kvQkQ5QzA4RDktMEI1OS00QjdBLTlGNkEtMEIzREM1RDBFODQ0Lzc0RTMxNjgyLURDNEItNDlBNS1CMDJBLUQ5NkRDRTkxMzBBMyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwfSwic21hcnRDcm9wIjp7ImZhY2VJbmRleCI6MCwicGFkZGluZyI6NDB9fX0=",
  },
  // {
  //   id: 10,
  //   pictureName: "Picture 10",
  //   pictureUrl: "https://mediarouting.vestahub.com/Media/116587503/box/500x500",
  // },
  // {
  //   id: 11,
  //   pictureName: "Picture 11",
  //   pictureUrl:
  //     "https://res.cloudinary.com/corcoran-dryrmqrbg/image/upload/c_fill,g_face,h_400,w_400/AgentApi/Realogy/12B64220-26B7-40A8-9833-AEF917960DEC/85E46999-D716-4B94-99FF-2F64451BDC7F.jpg",
  // },
  // {
  //   id: 12,
  //   pictureName: "Picture 12",
  //   pictureUrl:
  //     "https://res.cloudinary.com/corcoran-dryrmqrbg/image/upload/c_fill,g_face,h_400,w_400/AgentApi/Realogy/BD9C08D9-0B59-4B7A-9F6A-0B3DC5D0E844/74E31682-DC4B-49A5-B02A-D96DCE9130A3.jpg",
  // },
  // {
  //   id: 13,
  //   pictureName: "Picture 13",
  //   pictureUrl:
  //     "https://res.cloudinary.com/corcoran-dryrmqrbg/image/upload/c_fill,g_face,h_400,w_400/AgentApi/Realogy/05346572-C540-4D5A-BDD8-E0A992B3DFDA/6DB7E9EE-284A-483D-9CDA-6AD0306D2830.jpg",
  // },
];

export default data;
