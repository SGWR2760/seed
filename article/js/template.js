function header() {
  var html = "";
  html += '<div class="headerContent">';
  html += '  <nav class="navbar navbar-light bg-light shadow-sm ">';
  html += '    <a class="navbar-brand" href="javascript:void(0)">メール文面ツール Blog</a>';
  html += '    <span class="badge badge-warning">β版</span>';
  html += '  </nav>';
  html += '</div>';
  document.write(html);
}

function sideContent() {
  var html = "";
  html += '<div class="card">';
  html += '  <div class="list-group list-group-flush">';
  html += '    <a class="list-group-item list-group-item-action list-group-item-info" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">他の記事</a>';
  html += '    <a href="#" class="list-group-item list-group-item-action">';
  html += '      <div class="d-flex w-100 justify-content-between">';
  html += '        <h5 class="mb-1">List group item heading</h5>';
  html += '        <small>3 days ago</small>';
  html += '      </div>';
  html += '      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>';
  html += '      <small>Donec id elit non mi porta.</small>';
  html += '    </a>';
  html += '    <a href="#" class="list-group-item list-group-item-action">';
  html += '      <div class="d-flex w-100 justify-content-between">';
  html += '        <h5 class="mb-1">List group item heading</h5>';
  html += '        <small class="text-muted">3 days ago</small>';
  html += '      </div>';
  html += '      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>';
  html += '      <small class="text-muted">Donec id elit non mi porta.</small>';
  html += '    </a>';
  html += '    <a href="#" class="list-group-item list-group-item-action">';
  html += '      <div class="d-flex w-100 justify-content-between">';
  html += '        <h5 class="mb-1">List group item heading</h5>';
  html += '        <small class="text-muted">3 days ago</small>';
  html += '      </div>';
  html += '      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>';
  html += '      <small class="text-muted">Donec id elit non mi porta.</small>';
  html += '    </a>';
  html += '    <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">すべての記事を表示</a>';
  html += '';
  html += '  </div>';
  html += '</div>';
  document.write(html);
}

function footer() {
  var html = "";
  html += '  <div class="jumbotron jumbotron-fluid">';
  html += '    <div class="container">';
  html += '      <ul class="list-group list-group-flush">';
  html += '        <li class="list-group-item"><a href="https://createsentence.net/">メール文面ツール</a></li>';
  html += '        <li class="list-group-item">メール文面ツール　Blog</li>';
  html += '        <!-- <li class="list-group-item">Morbi leo risus</li>';
  html += '        <li class="list-group-item">Porta ac consectetur ac</li> -->';
  html += '        <li class="list-group-item"><a href="https://forms.gle/rNtyQtngrEGYnnXJA">ご意見・ご感想・改善点</a></li>';
  html += '        <li class="list-group-item"><a href="#">免責事項</a></li>';
  html += '      </ul>';
  html += '    </div>';
  html += '    <div class="myName">';
  html += '      Copyright ☻ Sugawara';
  html += '    </div>';
  html += '  </div>';
  document.write(html);

}
