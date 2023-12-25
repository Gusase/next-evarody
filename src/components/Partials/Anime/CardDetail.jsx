const CardDetail = ({header,body}) => {
  return (
    <Card>
      <CardHeader>
        {header}
      </CardHeader>
      <Divider/>
      <CardBody>
        {body}
      </CardBody>
    </Card>
    )
}

export default CardDetail