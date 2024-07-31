Feature: Testes de API

  Scenario: Criar um novo post
    Given que eu tenho uma nova postagem com título "foo" e corpo "bar"
    When eu envio a postagem para a API
    Then a postagem deve ser criada com sucesso

  Scenario: Atualizar um post existente
    Given que eu tenho um post existente com id 1
    When eu atualizo o título para "updated title"
    Then o post deve ser atualizado com sucesso

  Scenario: Consultar um post existente
    Given que eu tenho um post existente com id 1
    When eu consulto o post pela API
    Then devo receber os detalhes do post
