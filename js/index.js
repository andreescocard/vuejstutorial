$(document).ready(function() {
    
    //USING VUE
    
    //Componentes reusáveis
    var data = {
           livros: [{ titulo: 'Orange is The New Black', autor: 'Piper Kerman', checked: true },
                   { titulo: 'A Origem das Espécies', autor: 'Charles Darwin', checked: false }],
           cabecalho: 'Livros Preferidos',
           novoLivro: '',
           novoAutor: ''
         };
        
         /**
          * Declarando os componentes
          */
         var ItensComp = Vue.extend({
           data: function () {
             return data;
           },
           template: '<ul>' +
           '           <li v-for="livro in livros" :class="{ \'removido\': livro.checked }">' +
           '             <div class="checkbox">' +
           '              <label>' +
           '                     <input type="checkbox" v-model="livro.checked"> ' +
           '                     <big>{{ livro.titulo }}</big> - <small>{{ livro.autor }}</small>' +
           '              </label>' +
           '             </div>' +
           '           </li>' +
           '         </ul>'
         });
        
         var AlteraTituloComp = Vue.extend({
           data: function () {
             return data;
           },
           template: '<input v-model="cabecalho"/>'
         });
        
         var AddItemComp = Vue.extend({
           data: function () {
             return data;
           },
           methods: {
             addLivro: function () {
               var titulo, autor;
               titulo = this.novoLivro.trim();
               autor = this.novoAutor.trim();
               if (titulo) {
                 this.livros.push({
                   titulo: titulo,
                   autor: autor,
                   checked: false
                 });
                 this.novoLivro = "";
                 this.novoAutor = "";
               }
             }
           },
           template:
             '<div>' +
                   '<input v-model="novoLivro" @keyup.enter="addLivro"' +
                          ' placeholder="Adicionar título do livro" type="text" class="form-control" />'  +
                   '<input v-model="novoAutor" @keyup.enter="addLivro"' +
                          ' placeholder="Adicionar autor do livro" type="text" class="form-control" /> <br/>'  +
                   '<span class="input-group-btn">' +
                   '  <button @click="addLivro" class="js-add btn btn-primary btn-block"' +
                      ' type="button">Adicionar!</button>'  +
                   '</span>' +
             '<div>'
         });

         var Counter = Vue.extend({
            data: function () {
                return {
                    count: 0
                }
            },
            template: '<button class="btn" v-on:click="count++">Você clicou em mim {{ count }} vezes.</button>'
          });
        
        
         Vue.component('itens-comp', ItensComp);
         Vue.component('altera-titulo-comp', AlteraTituloComp);
         Vue.component('add-item-comp', AddItemComp);
         Vue.component('counter', Counter);
        
         new Vue({
           el: '#app',
           data: data
         });
    
    // Componentes
    // https://v3.vuejs.org/guide/component-basics.html#base-example
    
    /*var buttonCounter = Vue.component('button-counter', {
        data: function () {
            return {
                count: 0
            }
        },
        template: '<button class="btn" v-on:click="count++">Você clicou em mim {{ count }} vezes.</button>'
    })
    
    
    var data = {
        livros: [{ titulo: 'Orange is The New Black', autor: 'Piper Kerman', checked: true },
        { titulo: 'A Origem das Espécies', autor: 'Charles Darwin', checked: false }],
        cabecalho: 'Livros Preferidos',
        novoLivro: '',
        novoAutor: ''
    };
    
    new Vue({
        el: '#app',
        data: data,
        components: {buttonCounter: buttonCounter},
        methods: {
            addLivro: function () {
                var titulo = this.novoLivro.trim();
                var autor = this.novoAutor.trim();
                if (titulo && autor) {
                    this.livros.push({
                        titulo: titulo,
                        autor: autor,
                        checked: false
                    });
                    this.novoLivro = '';
                    this.novoAutor = '';
                }
            }
        }
    });*/
    
    
    
    
    
    //USING JQUERY BELOW
    /*
    function onAdd() {
        var $ul, li, $li, $label, $div, livro, autor;
        livro = $('.js-novo-livro').val();
        autor = $('.js-novo-autor').val();
        
        // valida se “livro” está vazio
        if (livro === '') {
            return;
        }
        
        $ul = $('ul');
        $li = $('<li>').appendTo($ul);
        $div = $('<div>')
        .addClass('checkbox')
        .appendTo($li);
        
        $label = $('<label>').appendTo($div);
        $('<input>')
        .attr('type', 'checkbox')
        .addClass('js-livro')
        .attr('name', 'list')
        .click(toggleRemovido)
        .appendTo($label);
        
        $('<big>')
        .appendTo($label)
        .append(livro);
        
        $label.append(" - ");
        
        $('<small>')
        .appendTo($label)
        .append(autor);
        
        $('.js-novo-livro, .js-novo-autor').val('');
    }
    
    
    function toggleRemovido(ev) {
        var $el;
        $el = $(ev.currentTarget);
        $el.closest('li').toggleClass('removido');
    }
    $('.js-add').click(onAdd);
    $('.js-livro').click(toggleRemovido);
    */
});